
import { Route, Routes } from 'react-router-dom';
import './assets/css/main.css';
import RolletIFrame from './component/RolletIFrame';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/dashboard' Component={Home}></Route>
      <Route path='/rollet' Component={RolletIFrame}></Route>
    </Routes>
  );
}

export default App;
