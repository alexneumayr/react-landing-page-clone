import './App.css';
import AboutMe from './AboutMe/AboutMe.js';
import Companies from './Companies/Companies.js';
import GetInTouch from './GetInTouch/GetInTouch.js';
import Header from './Header/Header.js';
import PageTop from './PageTop/PageTop.js';
import Services from './Services/Services.js';

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
      </main>
    </div>
  );
}
