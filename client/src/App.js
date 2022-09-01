import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from './components/Products';
import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Products />
      <About id="about" />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
