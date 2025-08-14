import { Section, Container } from './Container';

export default function Auth(){
  return (
    <Section id="auth" className="auth-section">
      <Container>
        <div className="auth-content u-grid-2">
          <div className="auth-text u-stack">
            <h2>We solve digital problems with an outstanding creative flare</h2>
            <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
          </div>
          <div className="auth-form">
            <div className="form-tabs">
              <button className="tab active">SIGN UP</button>
              <button className="tab">LOGIN</button>
            </div>
            <form>
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Your password" required />
              <button type="submit" className="btn btn-primary">Create an Account</button>
              <div className="divider">or</div>
              <button type="button" className="btn btn-twitter">
                <i className="fab fa-twitter"></i> Login via Twitter
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
