import React, { useState, useCallback, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import {
  FaCalendar,
  FaSatelliteDish,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { GiOrbital, GiWorld } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { getLaunchesRequest } from '../../store/modules/launch/actions';
import { Launch } from '../../store/modules/launch/types';
import { StoreState } from '../../store/createStore';

import { Header, Footer, BackButton, Modal } from '../../components';

import {
  Container,
  Filter,
  LaunchesList,
  LaunchItem,
  Pagination,
  PaginationButton,
  PaginationButtons,
} from './styles';

interface Links {
  mission_patch: string;
  article_link: string;
  wikipedia: string;
  youtube_id: string;
  flickr_images: string[];
}

const Launches: React.FC = () => {
  const dispacth = useDispatch();

  const { launches, loading } = useSelector(
    (state: StoreState) => state.launch,
  );

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedLaunch, setSelectedLaunch] = useState<Links>({} as Links);
  const [openModal, setOpenModal] = useState(false);

  const [pageLimit] = useState(16);
  const [total] = useState(launches.length);
  const [page, setPage] = useState(1);
  const [launchesPage, setLaunchesPage] = useState<Launch[]>([]);

  useEffect(() => {
    dispacth(getLaunchesRequest());
  }, [dispacth]);

  const handleSelectDate = useCallback(date => {
    setSelectedDate(date);
  }, []);

  const totalPages = useMemo(() => Math.ceil(total / pageLimit), [
    pageLimit,
    total,
  ]);

  useEffect(() => {
    const selectedPage = page - 1;
    const start = selectedPage * pageLimit;
    const end = start + pageLimit;

    setLaunchesPage(launches.slice(start, end));
  }, [page, pageLimit, launches]);

  const handlePreviousPage = useCallback(() => {
    if (page <= 1) {
      return;
    }

    setPage(page - 1);
  }, [page]);

  const handleNextPage = useCallback(() => {
    if (page >= totalPages) {
      return;
    }

    setPage(page + 1);
  }, [page, totalPages]);

  const handleOpenModal = useCallback(links => {
    setSelectedLaunch(links);
    setOpenModal(true);
  }, []);

  return (
    <>
      {openModal && (
        <Modal launch={selectedLaunch} onClose={() => setOpenModal(false)} />
      )}

      <Header>Launches</Header>

      <Container>
        <BackButton />

        <Filter>
          <div className="fill">
            <input type="text" placeholder="Filter by mission name" />
          </div>

          <div>
            <FaCalendar size={15} />
            <DatePicker
              selected={selectedDate}
              onChange={handleSelectDate}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div>
            <GiOrbital size={20} />
            <select name="orbit">
              <option value="0">Select a orbit</option>
            </select>
          </div>
        </Filter>

        <LaunchesList>
          {loading ? (
            <p>Carregando resultados...</p>
          ) : (
            <>
              {launchesPage.map(launch => (
                <LaunchItem
                  key={launch.flight_number}
                  onClick={() => handleOpenModal(launch.links)}
                >
                  <h3>{launch.mission_name}</h3>

                  <div className="payload">
                    <div>
                      <GiWorld />
                      <span>
                        {launch.rocket.second_stage.payloads[0].nationality}
                      </span>
                    </div>

                    <div>
                      <GrUserWorker />
                      <span>
                        {launch.rocket.second_stage.payloads[0].manufacturer}
                      </span>
                    </div>

                    <div>
                      <FaSatelliteDish />
                      <span>
                        {launch.rocket.second_stage.payloads[0].payload_type}
                      </span>
                    </div>
                  </div>

                  <p>
                    Launch Date:
                    <strong> 2021-01-01</strong>
                  </p>
                </LaunchItem>
              ))}
            </>
          )}
        </LaunchesList>

        {!loading && (
          <Pagination>
            <p>
              {`Total Results `}
              <strong>{launches.length}</strong>
            </p>

            <PaginationButtons>
              <PaginationButton
                onClick={handlePreviousPage}
                notClicked={page === 1}
              >
                <FaChevronLeft />
              </PaginationButton>

              <PaginationButton
                onClick={handleNextPage}
                notClicked={page === totalPages}
              >
                <FaChevronRight />
              </PaginationButton>
            </PaginationButtons>

            <strong>{`${page}/${totalPages}`}</strong>
          </Pagination>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Launches;
