import { Section, Container } from './Container';

export default function Cta(){
  return (
    <Section id="cta" className="cta-section">
      <Container className="u-stack">
        <h2>Easy to setup.<br/>Easy to maintain</h2>
        <p>Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.</p>
        <div className="cta-buttons">
          <button className="play-btn" aria-label="Play video">
            <i className="fab fa-youtube"></i>
          </button>
            <button className="btn btn-primary">Get Started</button>
        </div>
      </Container>
    </Section>
  );
}
