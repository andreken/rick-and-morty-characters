import { Avatar, Skeleton } from '@mui/material';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { useState } from 'react';

interface IProps {
  imageUrl: string,
  alt?: string,
}

type StyledAvatarProps = {
  imageLoaded: boolean
};

const StyledRoot = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
});

const StyledAvatar = styled(Avatar, {
  shouldForwardProp: isPropValid,
})<StyledAvatarProps>((props) => ({
  width: 160,
  height: 160,
  opacity: Number(props.imageLoaded),
  transition: 'opacity 1s',
}));

const StyledSkeleton = styled(Skeleton)({
  position: 'absolute',
});

function ProfilePicture({ imageUrl, alt = '' }: IProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <StyledRoot>
      { !imageLoaded && <StyledSkeleton variant="circular" width={160} height={160} /> }
      <StyledAvatar src={imageUrl} alt={alt} onLoad={handleImageLoaded} imageLoaded={imageLoaded} />
    </StyledRoot>
  );
}

ProfilePicture.defaultProps = {
  alt: '',
};

export default ProfilePicture;
