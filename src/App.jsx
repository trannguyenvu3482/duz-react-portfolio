import './App.css';
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Home,
  Portfolio,
  ScrollToTop,
  Skills,
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
