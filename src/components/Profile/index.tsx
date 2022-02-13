import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';

import { ICharacter } from '../../api/types';

import Character from './Character';
import Location from './Location';
import Episodes from './Episodes';

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  ' > *:not(:last-child)': {
    paddingBottom: '1rem',
  },
});

function Profile(data: ICharacter) {
  const { origin, location, episode } = data;

  return (
    <Card>
      <StyledCardContent>
        <Character
          {...data}
        />
        <Location
          locationUrl={origin.url ?? ''}
          locationTitle="Origin"
        />
        <Location
          locationUrl={location.url ?? ''}
          locationTitle="Location"
        />
        <Episodes
          episodeUrls={episode}
        />
      </StyledCardContent>
    </Card>
  );
}

export default Profile;
