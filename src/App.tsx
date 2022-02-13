import { Container } from '@mui/material';
import { PageTitle } from './components/UI/atoms';
import ProfilesGrid from './containers/ProfilesGrid';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <PageTitle styles={{ padding: '2rem 0' }}>Rick and Morty characters</PageTitle>
        <ProfilesGrid />
      </Container>
    </div>
  );
}

export default App;
