import { Skeleton } from '@mui/material'

const LocationSkeleton = () => (
  <>
    {[...new Array(4)].map((_, index) => <Skeleton key={index} height={25} />)}
  </>
)

export default LocationSkeleton