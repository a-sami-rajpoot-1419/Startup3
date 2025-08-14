import { Section, Container } from './Container';

export default function Contact(){
  return (
    <Section id="contact" className="contact">
      <Container>
        <div className="contact-content u-grid-2">
          <div className="contact-info">
            <h2>Let's Keep in Touch</h2>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>+1 555 505 5050</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>info@designmodo.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>San Francisco, CA560 Bush St & <br/>20th Ave, Apt5C San Francisco, <br/>230909</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="First name" required />
                </div>
                <div className="form-group">
                  <label>BUDGET</label>
                  <select>
                    <option>$500</option>
                    <option>$1000</option>
                    <option>$2000</option>
                    <option>$5000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>INPUT FIELD</label>
                <input type="email" placeholder="name@mail.com" required />
              </div>
              <div className="form-group">
                <label>YOUR MESSAGE</label>
                <textarea placeholder="Message" rows="4"></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="copy" />
                <label htmlFor="copy">Send me a copy</label>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
