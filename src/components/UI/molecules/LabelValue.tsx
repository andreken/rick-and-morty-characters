import { Label, Text } from '../atoms'
import styled from '@emotion/styled'

interface IProps {
  label: string,
  value?: string | number,
}

const StyledRoot = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const LabelValue = ({ label, value }: IProps) => (
  <StyledRoot>
    <Label styles={{ minWidth: '100px' }}>{label}</Label>
    {value && <Text styles={{ textAlign: 'right' }}>{value}</Text>}
  </StyledRoot>
)

export default LabelValue