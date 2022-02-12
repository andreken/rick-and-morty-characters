import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps
}

const Text = ({ children, styles }: IProps) => (
  <Typography variant='body2' component='p' sx={styles}>{children}</Typography>
)

export default Text