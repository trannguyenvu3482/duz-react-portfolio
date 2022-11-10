import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
