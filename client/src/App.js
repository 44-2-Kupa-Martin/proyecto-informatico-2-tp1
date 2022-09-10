import Header from "./components/homepage/Header";
import Products from './components/homepage/Products';
import About from "./components/homepage/About";
import Services from './components/homepage/Services';
import Contact from './components/homepage/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="easeIn" style={{maxWidth: '900px', margin: '0 auto 0 auto'}}>
      <Header />
      <main>
        <Products id="products" />
        <About id="about" />
        <Services id="services" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
