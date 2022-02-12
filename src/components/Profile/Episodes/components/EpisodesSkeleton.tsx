import { Skeleton } from '@mui/material'

interface IProps {
  episodes: number
}

const EpisodesSkeleton = ({ episodes }: IProps) => (
  <>
    {[...new Array(episodes)].map((_, index) => <Skeleton key={index} height={20} />)}
  </>
)

export default EpisodesSkeleton