import React, { useCallback, useMemo } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import { Wrapper, Container } from './styles';

interface Props {
  onClose(value: boolean): void;
  launch: {
    mission_patch: string;
    article_link: string;
    wikipedia: string;
    youtube_id: string;
    flickr_images: string[];
  };
}

const Modal: React.FC<Props> = ({ launch, onClose }) => {
  const handleCloseModal = useCallback(() => onClose(false), [onClose]);

  const launchPhotos = useMemo(() => launch.flickr_images.slice(0, 4), [
    launch.flickr_images,
  ]);

  return (
    <Wrapper>
      <Container>
        <div className="close">
          <h3>Launch Links</h3>

          <button type="button" onClick={handleCloseModal}>
            <AiOutlineCloseSquare />
          </button>
        </div>

        {launch.article_link ||
        launch.wikipedia ||
        launch.youtube_id ||
        launch.flickr_images.length > 0 ? (
          <>
            <div className="video">
              {launch.article_link && launch.wikipedia && launch.mission_patch && (
                <div>
                  <div>
                    {launch.mission_patch && (
                      <>
                        <span>
                          Mission
                          <br />
                          Patch
                        </span>
                        <img src={launch.mission_patch} alt="Mission Patch" />
                      </>
                    )}
                  </div>

                  <div>
                    {launch.article_link && (
                      <a href={launch.article_link} target="blank">
                        Mission Article
                      </a>
                    )}

                    {launch.wikipedia && (
                      <a href={launch.wikipedia} target="blank">
                        Wikipedia
                      </a>
                    )}
                  </div>
                </div>
              )}

              {launch.youtube_id && (
                <iframe
                  src={`https://www.youtube.com/embed/${launch.youtube_id}`}
                  width="100%"
                  height="398"
                  title="youtube"
                />
              )}
            </div>

            <div className="fotos">
              {launchPhotos.map(url => (
                <img key={url} src={url} alt={url} />
              ))}
            </div>
          </>
        ) : (
          <p className="no-content">Links is not available.</p>
        )}
      </Container>
    </Wrapper>
  );
};

export default Modal;
