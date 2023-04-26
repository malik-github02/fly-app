import FirstNavbar from './components/FirstNavbar';
import SecondNavbar from './components/SecondNavbar';
import LandingPage from './components/LandingPage';
import ClassOption from './components/ClassOption';
import PlanTravel from './components/PlanTravel';
import Features from './components/Features';
import Captain from './components/Captain';
import Travelers from './components/Travelers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
       return (
              <div className="App">
                     <FirstNavbar />
                     <SecondNavbar />
                     <LandingPage />
                     <ClassOption />
                     <PlanTravel />
                     <Features />
                     <Captain />
                     <Travelers />
                     <Contact />
                     <Footer />
              </div>
       );
}

export default App;
