import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps
}

function Text({ children, styles }: IProps) {
  return <Typography variant="body2" component="p" sx={styles}>{children}</Typography>;
}

Text.defaultProps = {
  styles: {},
};

export default Text;
