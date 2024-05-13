
import './assets/css/main.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rotation from './pages/Home/Rotation';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/rotate' Component={Rotation}></Route>
    </Routes>
  );
}

export default App;
