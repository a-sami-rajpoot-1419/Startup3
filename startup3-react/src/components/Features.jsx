import { Section, Container } from './Container';

export default function Features(){
  return (
    <Section id="features" className="features content-section">
      <Container>
        <div className="content-title-wrap u-stack">
          <div className="content-badge">FREE SAMPLE</div>
          <h2 className="content-title">Powerful Generator and Free Figma Sources</h2>
          <p className="content-description">
            Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </Container>
    </Section>
  );
}
