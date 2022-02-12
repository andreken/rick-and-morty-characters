import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps
}

function Label({ children, styles }: IProps) {
  return <Typography variant="body1" component="label" sx={styles}>{children}</Typography>;
}

Label.defaultProps = {
  styles: {},
};

export default Label;
