
import './App.css';
import { useEffect, useRef } from 'react';
import Navbar from './Components/Navbar'
import{Route,Routes,useLocation } from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import HealthCare from './Pages/Services/HealthCare';
import MedicalBilling from './Pages/Services/MedicalBilling';
import MedicalCoding from './Pages/Services/MedicalCoding';
import Credentialing from './Pages/Services/Credentialing';
import CashFlow from './Pages/Services/CashFlow';
import PatientSt from './Pages/Services/PatientSt';
import PatientAR from './Pages/Services/PatientAR';
import CallCenter from './Pages/Services/CallCenter';
import HelpDesk from './Pages/Services/HelpDesk';
import InOutService from './Pages/Services/InOutService';
import Email from './Pages/Services/Email';
import IT from './Pages/Services/IT';
import GraphicDesign from './Pages/Services/GraphicDesign'; 
import WebDev from './Pages/Services/WebDev';
import SEO from './Pages/Services/SEO';
import SocialMedia from './Pages/Services/SocialMedia';
import { Specialities } from './Pages/Specialities';
import Appointment from './Pages/Appointment';
import TopBenefits from './Pages/TopBenefits';

//tawk-to live chat
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <>
      {/* NavBar */}
      <Navbar/>
      <ScrollToTop />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      {/* Service */}
      <Route path='/healthcare' element={<HealthCare/>} />
      <Route path='/MedicalBilling' element={<MedicalBilling/>} />
      <Route path='/MedicalCoding' element={<MedicalCoding/>} />
      <Route path='/Credential' element={<Credentialing/>} />
      <Route path='/CashFlow' element={<CashFlow/>} />
      <Route path='/PatientSt' element={<PatientSt/>} />
      <Route path='/PatientAR' element={<PatientAR/>} />
      <Route path='/CallCenter' element={<CallCenter/>} />
      <Route path='/HelpDesk' element={<HelpDesk/>} />   
      <Route path='/InOut' element={<InOutService/>} />
      <Route path='/Email' element={<Email/>} />
      <Route path='/It' element={<IT/>} />  
      <Route path='/Graphic' element={<GraphicDesign/>} />
      <Route path='/WebDev' element={<WebDev/>}/>
      <Route path='/seo' element={<SEO/>} />
      <Route path='/Social' element={<SocialMedia/>} />
      {/* Other */}
      <Route path='/specialities' element={<Specialities/> } />
      <Route path='/Appointment'  element={<Appointment/>}        />
      <Route path='/topBenefits' element={<TopBenefits/>} />
     </Routes>
      {/* Footer */}
      <Footer/> 
      
      
          

      <TawkMessengerReact
      propertyId='65c8c4f40ff6374032cbc00d'
      widgetId='1hmc42n5a'
      />
    </>
  );
}

export default App;
