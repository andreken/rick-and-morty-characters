import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps,
}

function Title({ children, styles }: IProps) {
  return <Typography variant="h6" sx={styles}>{children}</Typography>;
}

Title.defaultProps = {
  styles: {},
};

export default Title;
