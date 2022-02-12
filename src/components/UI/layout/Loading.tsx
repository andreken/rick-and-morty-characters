import styled from '@emotion/styled';
import Loader from '../atoms/Loader';

const StyledRoot = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

function Loading() {
  return (
    <StyledRoot>
      <Loader />
    </StyledRoot>
  );
}

export default Loading;
