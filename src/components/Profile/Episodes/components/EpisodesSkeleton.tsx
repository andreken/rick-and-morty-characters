/* eslint-disable react/no-array-index-key */
import { Skeleton } from '@mui/material';

interface IProps {
  episodes: number
}

function EpisodesSkeleton({ episodes }: IProps) {
  return (
    <>
      {[...new Array(episodes)].map((_, index) => <Skeleton key={index} height={20} />)}
    </>
  );
}

export default EpisodesSkeleton;
