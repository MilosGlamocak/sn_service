
import { Container } from '@mui/material';
import './App.css';
import NavigationContainer from './Components/NavigationContainer';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <Container className='container'>
      <NavigationContainer />
      <WelcomePage />
    </Container>
    
  );
}

export default App;
