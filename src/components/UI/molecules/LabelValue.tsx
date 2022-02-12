import styled from '@emotion/styled';
import { Label, Text } from '../atoms';

interface IProps {
  label: string,
  value?: string | number,
}

const StyledRoot = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

function LabelValue({ label, value }: IProps) {
  return (
    <StyledRoot>
      <Label styles={{ minWidth: '100px' }}>{label}</Label>
      {value && <Text styles={{ textAlign: 'right' }}>{value}</Text>}
    </StyledRoot>
  );
}

LabelValue.defaultProps = {
  value: '',
};

export default LabelValue;
