import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps,
}

const Title = ({ children, styles }: IProps) => (
  <Typography variant='h6' sx={styles}>{children}</Typography>
)

export default Title