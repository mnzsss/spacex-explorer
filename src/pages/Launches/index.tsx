import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  FaCalendar,
  FaSatelliteDish,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { GiOrbital, GiWorld } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { getRocketsRequest } from '../../store/modules/rocket/actions';
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

const orbits = [
  {
    id: '',
    name: 'Select Orbit',
  },
  {
    id: 'leo',
    name: 'Low Earth Orbit',
  },
  {
    id: 'mars',
    name: 'Mars Orbit',
  },
  {
    id: 'moon',
    name: 'Moon Orbit',
  },
  {
    id: 'gto',
    name: 'Geosynchronous Transfer Orbit',
  },
  {
    id: 'pluto',
    name: 'Pluto Orbit',
  },
];

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

  const { rockets } = useSelector((state: StoreState) => state.rocket);

  const [orbitMap, setOrbitMap] = useState(new Map());

  const [openModal, setOpenModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLaunch, setSelectedLaunch] = useState<Links>({} as Links);

  const [search, setSearch] = useState('');
  const [selectOrbit, setSelectOrbit] = useState('');

  const [pageLimit] = useState(16);
  const [page, setPage] = useState(1);

  const [launchesPage, setLaunchesPage] = useState<Launch[]>([]);

  useEffect(() => {
    dispacth(getLaunchesRequest());
    dispacth(getRocketsRequest());
  }, [dispacth]);

  useEffect(() => {
    if (rockets) {
      const returnResults = new Map();
      rockets.map(result => {
        const weights = new Map();
        result.payload_weights.map(weight => {
          weights.set(weight.id, weight);
        });
        returnResults.set(result.rocket_id, weights);
      });

      setOrbitMap(returnResults);
    }
  }, [rockets]);

  const filteredLaunches = useMemo(() => {
    if (!launches || !launches.length) return [];

    return launches.filter(({ mission_name, launch_date_local, rocket }) => {
      if (
        search &&
        !mission_name.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      if (selectedDate && !launch_date_local.includes(selectedDate)) {
        return false;
      }
      if (selectOrbit) {
        const orbitMapValues = orbitMap.get(rocket.rocket_id);
        const selectedOrbitValue = orbitMapValues.get(selectOrbit);
        if (selectedOrbitValue) {
          if (
            selectedOrbitValue.lb <
            rocket.second_stage.payloads[0].payload_mass_lbs
          ) {
            return false;
          }
        } else {
          return false;
        }
      }

      return true;
    });
  }, [launches, orbitMap, search, selectOrbit, selectedDate]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(filteredLaunches.length);
    setPage(1);
  }, [filteredLaunches.length]);

  const totalPages = useMemo(() => Math.ceil(total / pageLimit), [
    pageLimit,
    total,
  ]);

  useEffect(() => {
    const selectedPage = page - 1;
    const start = selectedPage * pageLimit;
    const end = start + pageLimit;

    setLaunchesPage(filteredLaunches.slice(start, end));
  }, [page, pageLimit, filteredLaunches]);

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

  const handleClearFilter = useCallback(() => {
    setSearch('');
    setSelectedDate('');
    setSelectOrbit('');
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
            <input
              type="text"
              placeholder="Filter by mission name"
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div>
            <FaCalendar size={15} />
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
            />
          </div>

          <div>
            <GiOrbital size={20} />
            <select
              value={selectOrbit}
              name="orbit"
              onChange={e => setSelectOrbit(e.target.value)}
            >
              {orbits.map(orbit => (
                <option key={orbit.id} value={orbit.id}>
                  {orbit.name}
                </option>
              ))}
            </select>
          </div>

          <button type="button" onClick={handleClearFilter}>
            Clear
          </button>
        </Filter>

        <LaunchesList>
          {loading ? (
            <p>Carregando resultados...</p>
          ) : (
            <>
              {launchesPage.length > 0 ? (
                launchesPage.map(launch => (
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
                      <strong>
                        {format(new Date(launch.launch_date_utc), 'yyyy-MM-dd')}
                      </strong>
                    </p>
                  </LaunchItem>
                ))
              ) : (
                <p>No results for the criteria.</p>
              )}
            </>
          )}
        </LaunchesList>

        {!loading && launchesPage.length > 0 && (
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
