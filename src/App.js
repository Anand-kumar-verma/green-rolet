
import './assets/css/main.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/dashboard' Component={Home}></Route>
    </Routes>
  );
}

export default App;
