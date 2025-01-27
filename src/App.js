import './App.css';
import Header from './Header/Header.js';
import PageTop from './PageTop/PageTop.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PageTop />
        <div className="space">Hi</div>
      </main>
    </div>
  );
}
