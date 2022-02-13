import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import styled from '@emotion/styled';

interface IProps {
  children: string | number,
  styles?: SxProps,
}

const StyledTitle = styled(Typography)({
  borderBottom: '2px solid #000',
  marginBottom: '.5rem',
});

function SectionTitle({ children, styles }: IProps) {
  return <StyledTitle sx={styles}>{children}</StyledTitle>;
}

SectionTitle.defaultProps = {
  styles: {},
};

export default SectionTitle;
