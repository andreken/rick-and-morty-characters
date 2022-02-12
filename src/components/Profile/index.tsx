import { Card, CardContent } from '@mui/material'
import styled from '@emotion/styled'

import { ICharacter } from '../../api/types'

import Character from "./Character"
import Location from "./Location"
import Episodes from './Episodes'

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  height: '50rem',
  ' > *:not(:last-child)': {
    paddingBottom: '1rem',
  }
})

const Profile = (data: ICharacter) => (
  <Card>
    <StyledCardContent>
      <Character
        {...data}
      />
      <Location
        locationUrl={data.origin.url ?? ''}
        locationTitle='Origin'
      />
      <Location
        locationUrl={data.location.url ?? ''}
        locationTitle='Location'
      />
      <Episodes
        episodeUrls={data.episode}
      />
    </StyledCardContent>
  </Card>
)

export default Profile