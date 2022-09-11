import Header from "../components/homepage/Header";
import Products from '../components/homepage/Products';
import About from "../components/homepage/About";
import Services from '../components/homepage/Services';
import Contact from '../components/homepage/Contact';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="easeIn">
      <Header />
      <main className="formatCenter">
        <Products id="products" />
        <About id="about" />
        <Services id="services" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;
