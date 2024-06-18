import './App.css';
import { AnimatedRoutes } from './AnimatedRoutes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
      <AnimatedRoutes></AnimatedRoutes>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
