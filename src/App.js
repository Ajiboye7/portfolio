import './Styles/App.css'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from './Components/Experience';
import Volunteer from './Components/Volunteer';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Volunteer/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
