import Events from '../components/Home/Events'
import Navbar from '../components/Navbar'
import Landing from '../components/Home/Landing';
import PastSpeakers from '../components/Home/Speakers_PastSpeak';
import BuyMerch from '../components/Home/BuyMerch';
import GetTicket from '../components/Home/GetTicket';
import Footer from '../components/Home/footer';
import ComingSoon from '../components/Home/ComingSoon';

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* Home */}
      <Landing />
      {/*Events */}
      <Events />
      {/* Past Speakers*/}
      <PastSpeakers />
      {/* <ComingSoon/> */}
      {/* Merch*/}
      <BuyMerch />
      {/* Get Ticket*/}
      <GetTicket/>
      {/* Footer*/}
      <Footer/>
    </>
  );
}

export default Home;
