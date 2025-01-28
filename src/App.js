import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Companies from './Companies/Companies.js';
import GetInTouch from './GetInTouch/GetInTouch.js';
import Header from './Header/Header.js';
import PageTop from './PageTop/PageTop.js';
import ReadyToGrow from './ReadyToGrow/ReadyToGrow';
import Services from './Services/Services.js';
import Testimonials from './Testimonials/Testimonials.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PageTop />
        <Companies />
        <AboutMe />
        <Services />
        <GetInTouch />
        <Testimonials />
        <ReadyToGrow />
      </main>
    </div>
  );
}
