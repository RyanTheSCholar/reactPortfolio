import './App.css'
import { Outlet } from 'react-router-dom';
import Navtabs from './components/navbar/navbar';

function App() {

  return (
    <div className='portfolio-theme '>
    <Navtabs/>
    <Outlet/>
    </div>
  )
}

export default App
