import T1 from '../assets/images/Testimonial1.jpg'
import T2 from '../assets/images/Testimonial2.jpg'
import T3 from '../assets/images/Testimonial3.jpg'
import T4 from '../assets/images/Testimonial4.jpg'
import { Section, Container } from './Container';
export default function Testimonials(){
  return (
    <Section id="testimonials" className="testimonials">
      <Container>
        <h2 className="section-title">Our Happy Clients</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src={T1} alt="Photo of Rayhan Curran" loading="lazy" decoding="async" />
            <p>"Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support."</p>
            <h5>RAYHAN CURRAN</h5>
          </div>
          <div className="testimonial-card">
            <img src={T2} alt="Photo of Kayley Frame" loading="lazy" decoding="async" />
            <p>"As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"</p>
            <h5>KAYLEY FRAME</h5>
          </div>
          <div className="testimonial-card">
            <img src={T3} alt="Photo of Gene Whitfield" loading="lazy" decoding="async" />
            <p>"The most important part of the Startup Framework is the samples"</p>
            <h5>GENE WHITFIELD</h5>
          </div>
          <div className="testimonial-card">
            <img src={T4} alt="Photo of Allan Kim" loading="lazy" decoding="async" />
            <p>"I've built my website with Startup just in one day, and it was ready-to-go."</p>
            <h5>ALLAN KIM</h5>
          </div>
        </div>
      </Container>
    </Section>
  );
}
