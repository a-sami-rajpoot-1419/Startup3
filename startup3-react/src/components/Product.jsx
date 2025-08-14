import mockup from '../assets/images/Mockup.png';
import { Section, Container } from './Container';

export default function Product(){
  return (
    <Section id="product" className="product">
      <Container>
        <div className="mockup-container">
          <img src={mockup} alt="Product mockup screenshot" className="mockup-image" loading="lazy" decoding="async" />
        </div>
        <div className="product-title-area">
          <h2>We Create Something New</h2>
          <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>
        <div className="product-features">
          <div className="product-feature-box feature-box-1">
            <div className="feature-icon"><i className="fas fa-file-alt"></i></div>
            <div className="feature-text">
              <h3>30 NEW FEATURE PAGES</h3>
              <p>Startup Framework contains components and complex blocks which can easily.</p>
            </div>
          </div>
          <div className="product-feature-box feature-box-2">
            <div className="feature-icon"><i className="fas fa-gem"></i></div>
            <div className="feature-text">
              <h3>USEFUL SYMBOL COMPONENTS</h3>
              <p>Samples will show you the feeling on how to play around using the components.</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="product-paginator">
        <div className="dot"></div>
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </Section>
  );
}
