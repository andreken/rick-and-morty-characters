import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import fetchEpisode from '../../../api/apiEpisode';
import { IEpisode } from '../../../api/types';

import SectionTitle from '../../UI/atoms/SectionTitle';
import EpisodeData from './components/EpisodeData';
import EpisodesSkeleton from './components/EpisodesSkeleton';

interface IProps {
  episodeUrls: string[]
}

const StyledRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const StyledEpisodesWrapper = styled.div({
  maxHeight: '10rem',
  overflow: 'auto',
});

const getEpisodes = async (urls: string[]) => {
  const results = urls.map((url) => fetchEpisode(url));
  const episodes = (await Promise.all(results)).filter((res) => res !== null);
  return episodes as IEpisode[];
};

function Episodes({ episodeUrls }: IProps) {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    getEpisodes(episodeUrls).then((result) => {
      if (mountedRef.current) {
        setEpisodes(result);
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      mountedRef.current = false;
    };
  }, [episodeUrls]);

  return (
    <StyledRoot>
      <SectionTitle>Episodes</SectionTitle>
      <StyledEpisodesWrapper>
        {
          episodes.length > 0
            ? episodes.map(({ id, name, episode }) => (
              <EpisodeData key={id} name={name} episode={episode} />
            ))
            : <EpisodesSkeleton episodes={episodeUrls.length} />
        }
      </StyledEpisodesWrapper>
    </StyledRoot>
  );
}

export default Episodes;
