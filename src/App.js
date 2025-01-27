import './App.css';
import Companies from './Companies/Companies.js';
import Header from './Header/Header.js';
import PageTop from './PageTop/PageTop.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PageTop />
        <Companies />
      </main>
    </div>
  );
}
