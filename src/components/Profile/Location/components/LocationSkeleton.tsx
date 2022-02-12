/* eslint-disable react/no-array-index-key */
import { Skeleton } from '@mui/material';

function LocationSkeleton() {
  return (
    <>
      {[...new Array(4)].map((_, index) => <Skeleton key={index} height={25} />)}
    </>
  );
}

export default LocationSkeleton;
