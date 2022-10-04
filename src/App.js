import './index.css';
import Links from './Components/Section3/Links.js'
import About from './Components/Section1/About'
import Competitors from './Components/Section2/Competitors';
import TitleBar from './Components/TitleBar/TitleBar';
import Contact from './Components/Section4/Contacts';

function App() {
  return (
    <div className="App">
      <TitleBar />
      <About />
      <Competitors />
      <Links />
      <Contact />
    </div>
  );
}

export default App;
