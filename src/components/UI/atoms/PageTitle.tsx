import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps,
}

function PageTitle({ children, styles }: IProps) {
  return (
    <Typography
      variant="h3"
      fontFamily="RickMortyFont"
      textAlign="center"
      sx={styles}
    >
      {children}
    </Typography>
  );
}

PageTitle.defaultProps = {
  styles: {},
};

export default PageTitle;
