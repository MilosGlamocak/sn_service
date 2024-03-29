
import { Container } from '@mui/material';
import './App.css';
import NavigationContainer from './Components/NavigationContainer';
import WelcomePage from './Components/WelcomePage';
import InfoPage from './Components/InfoPage';
import ComponentContainer from './Components/ComponentContainer';

function App() {
  return (
    <Container className='container'>
      <NavigationContainer />
      <WelcomePage />
      <ComponentContainer />
     
    </Container>
    
  );
}

export default App;
