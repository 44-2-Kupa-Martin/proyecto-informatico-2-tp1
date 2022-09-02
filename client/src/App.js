import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from './components/Products';
import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={{maxWidth: '900px', margin:'0 auto 0 auto'}}>
      <Navbar noLogo />
      <Header />
      <Products />
      <About id="about" />
      <Services id="services" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
