
import './App.css';
import Navbar from './Components/Navbar'
import{Route,Routes} from "react-router-dom"
import Home from './Pages/Home'

function App() {
  return (
    <>
      {/* NavBar */}
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
      {/* Footer */}
    </>
  );
}

export default App;
