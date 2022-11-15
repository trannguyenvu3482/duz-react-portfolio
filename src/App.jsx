import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Header, Home, Skills } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
