import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Products />    
      <Testimonials />
      <Footer />

    </main>
    </>
  );
}
    