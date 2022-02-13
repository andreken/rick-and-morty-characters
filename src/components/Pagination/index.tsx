import { Pagination as PaginationWrapper, PaginationItem } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface IProps {
  pages: number,
  currentPage: number
  onPageChange: (page: number) => void
}

const smallDevice = window.matchMedia('(max-width: 400px)').matches;

function Pagination({ pages, currentPage, onPageChange }: IProps) {
  if (pages < 2) return null;
  return (
    <PaginationWrapper
      count={pages}
      page={currentPage}
      size={smallDevice ? 'small' : 'medium'}
      onChange={(e, val) => onPageChange(val)}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBack, next: ArrowForward }}
          {...item}
        />
      )}
    />
  );
}

export default Pagination;
