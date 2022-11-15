import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Experience, Header, Home, Skills } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}

export default App;
