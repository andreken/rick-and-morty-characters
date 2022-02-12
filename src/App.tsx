import { Container } from '@mui/material'
import { Typography } from '@mui/material';
import ProfilesGrid from "./containers/ProfilesGrid";

function App() {

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Typography sx={{ padding: '1rem 0'}} variant="h4" textAlign="center">Rick and Morty characters</Typography>
        <ProfilesGrid />
      </Container>
    </div>
  );
}

export default App;
