
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Contactus from './pages/contactus';
import Registration from './pages/Registration';
import RegSuc from './pages/Registration_success';
import RegFail from './pages/Registration_fail';
import NotFound from './pages/notFound';
import AllSpeakers from './pages/allspeaker';
import MoreEvents2 from './pages/MoreEvents2';
import Sponsors from './pages/sponsors';
import OurTeam from './pages/ourteam';
import Toast3rd from './components/toast';
function App() {
  return (
    <body style={{overscrollBehavior:'none'}} >
          <Toast3rd/>
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/registration' element={<Registration/>}/>
      <Route exact path='/registration/success' element={<RegSuc/>}/>
      <Route exact path='/registration/failure' element={<RegFail/>}/>
      <Route exact path="/contactus" element={<Contactus />} />
      <Route exact path="/speakers" element={<AllSpeakers />} />
      <Route exact path="/sponsors" element={<Sponsors />} />
      <Route exact path="/events/" element={<MoreEvents2/>} />
      {/* <Route path={MY_ROUTE(':userId')} /> */}
      <Route exact path="/ourteam" element={<OurTeam/>} />
  
      
    </Routes>

    </Router>
    
    </body>
  );
}

export default App;
