import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface IProps {
  children: string | number,
  styles?: SxProps
}

const Label = ({ children, styles }: IProps) => (
  <Typography variant='body1' component='label' sx={styles}>{children}</Typography>
)

export default Label