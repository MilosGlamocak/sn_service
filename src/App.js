
import { Container } from '@mui/material';
import './App.css';
import NavigationContainer from './Components/NavigationContainer';
import WelcomePage from './Components/WelcomePage';
import InfoPage from './Components/InfoPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComponentContainer2 from './Components/ComponentContainer2';

function App() {
  return (
    <Container className='container'>
      <NavigationContainer />
      <ComponentContainer2/>
      {/*<WelcomePage />
      <ComponentContainer />*/}
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </Container>
    
  );
}

export default App;
