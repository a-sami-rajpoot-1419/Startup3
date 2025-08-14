import Work1 from '../assets/images/Work1.jpg'
import Work2 from '../assets/images/Work2.jpg'
import Work3 from '../assets/images/Work3.jpg'
import Work4 from '../assets/images/Work4.jpg'
import { Section, Container } from './Container';
export default function Portfolio(){
  return (
    <Section id="portfolio" className="portfolio">
      <Container>
        <div className="portfolio-header">
          <h2>Last works</h2>
          <button className="btn btn-outline">View all Works</button>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={Work1} alt="Mozart Project UI preview" loading="lazy" decoding="async" />
            <div className="portfolio-info">
              <span className="category">UI KIT</span>
              <h4>Mozart Project</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={Work2} alt="Startup Framework 2.0 preview" loading="lazy" decoding="async" />
            <div className="portfolio-info">
              <span className="category">FRAMEWORK</span>
              <h4>Startup Framework 2.0</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={Work3} alt="From the Sky aerial shot" loading="lazy" decoding="async" />
            <div className="portfolio-info">
              <span className="category">PHOTOS</span>
              <h4>From the Sky</h4>
            </div>
          </div>
          <div className="portfolio-item">
            <img src={Work4} alt="Air Forces concept" loading="lazy" decoding="async" />
            <div className="portfolio-info">
              <span className="category">PICTURES</span>
              <h4>Air Forces</h4>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
