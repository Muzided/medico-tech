
import './App.css';
import Navbar from './Components/Navbar'
import{Route,Routes} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
      {/* Footer */}
    </>
  );
}

export default App;
