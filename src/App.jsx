import './App.css'
import { Outlet } from 'react-router-dom';
import Navtabs from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className='portfolio-theme bg-Yellow-200'>
    <Navtabs/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
