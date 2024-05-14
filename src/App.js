
import './assets/css/main.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Rollet from './component/Rollet';
import RolletIFrame from './component/RolletIFrame';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/rollet' Component={RolletIFrame}></Route>
      <Route path='/new' Component={Rollet}></Route>
    </Routes>
  );
}

export default App;
