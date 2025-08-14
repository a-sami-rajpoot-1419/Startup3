import './styles.css';
// Keep script.js logic migration incremental; we'll port behaviors per component.

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Product from './components/Product.jsx';
import Auth from './components/Auth.jsx';
import Testimonials from './components/Testimonials.jsx';
import Cta from './components/Cta.jsx';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Product Section */}
      <Product />

      {/* Auth Section */}
      <Auth />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />

      {/* Portfolio */}
      <Portfolio />

      {/* Team */}
      <Team />

      {/* Contact */}
      <Contact />

      {/* Pricing */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
