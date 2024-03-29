
import { Container } from '@mui/material';
import './App.css';
import NavigationContainer from './Components/NavigationContainer';
import WelcomePage from './Components/WelcomePage';
import InfoPage from './Components/InfoPage';

function App() {
  return (
    <Container className='container'>
      <NavigationContainer />
      <WelcomePage />
      <InfoPage />
    </Container>
    
  );
}

export default App;
