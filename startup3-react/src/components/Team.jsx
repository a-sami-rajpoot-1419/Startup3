import Crew1 from '../assets/images/Crew1.jpg'
import Crew2 from '../assets/images/Crew2.jpg'
import Crew3 from '../assets/images/Crew3.jpg'
import Crew4 from '../assets/images/Crew4.jpg'
import Crew5 from '../assets/images/Crew5.jpg'
import { Section, Container } from './Container';

export default function Team(){
  return (
    <Section id="team" className="team">
      <Container className="u-stack">
        <h2>Startup Crew</h2>
        <p>The most important part of the Startup Framework is the samples. The <br/>samples form a set of 25 usable pages you can use as is or you can add <br/>new blocks from UI Kit.</p>
        <div className="team-grid">
          <div className="team-member">
            <img src={Crew1} alt="Portrait of Leah Salomon" loading="lazy" decoding="async" />
            <h4>Leah Salomon</h4>
            <p>UI Designer</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="team-member">
            <img src={Crew2} alt="Portrait of Colin Timmons" loading="lazy" decoding="async" />
            <h4>Colin Timmons</h4>
            <p>UX Designer</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>
          <div className="team-member">
            <img src={Crew3} alt="Portrait of Miguel Osborne" loading="lazy" decoding="async" />
            <h4>Miguel Osborne</h4>
            <p>Front-end Developer</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-google"></i></a>
              <a href="#"><i className="fab fa-medium"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="team-member">
            <img src={Crew4} alt="Portrait of Taylor Simon" loading="lazy" decoding="async" />
            <h4>Taylor Simon</h4>
            <p>Product Manager</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="team-member">
            <img src={Crew5} alt="Portrait of Steven MacAlister" loading="lazy" decoding="async" />
            <h4>Steven MacAlister</h4>
            <p>Copywriter</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
