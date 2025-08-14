import { Section, Container } from './Container';

export default function Pricing(){
  return (
    <Section id="pricing" className="pricing">
      <Container className="u-stack">
        <h2>Plans & Pricing</h2>
        <p>Startup Framework is free forever — you only pay for <br/>custom domain hosting or to export your site.</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="price">9.99<sup>$</sup></div>
            <ul className="features-list">
              <li><i className="fas fa-check"></i> 2 GB of space</li>
              <li><i className="fas fa-check"></i> 14 days of backups</li>
              <li><i className="fas fa-check"></i> Social integrations</li>
              <li><i className="fas fa-check"></i> Client billing</li>
              <li><i className="fas fa-check"></i> Remote access</li>
              <li><i className="fas fa-check"></i> Custom domain</li>
              <li><i className="fas fa-check"></i> 24 hours support</li>
              <li><i className="fas fa-check"></i> Admin tools</li>
              <li><i className="fas fa-check"></i> Collaboration tools</li>
              <li><i className="fas fa-check"></i> User management</li>
            </ul>
            <button className="btn btn-outline">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3>Professional</h3>
            <div className="price">19.99<sup>$</sup></div>
            <ul className="features-list">
              <li><i className="fas fa-check"></i> 2 GB of space</li>
              <li><i className="fas fa-check"></i> 14 days of backups</li>
              <li><i className="fas fa-check"></i> Social integrations</li>
              <li><i className="fas fa-check"></i> Client billing</li>
              <li><i className="fas fa-check"></i> Remote access</li>
              <li><i className="fas fa-check"></i> Custom domain</li>
              <li><i className="fas fa-check"></i> 24 hours support</li>
              <li><i className="fas fa-check"></i> Admin tools</li>
              <li><i className="fas fa-check"></i> Collaboration tools</li>
              <li><i className="fas fa-check"></i> User management</li>
            </ul>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3>Team</h3>
            <div className="price">49.99<sup>$</sup></div>
            <ul className="features-list">
              <li><i className="fas fa-check"></i> 2 GB of space</li>
              <li><i className="fas fa-check"></i> 14 days of backups</li>
              <li><i className="fas fa-check"></i> Social integrations</li>
              <li><i className="fas fa-check"></i> Client billing</li>
              <li><i className="fas fa-check"></i> Remote access</li>
              <li><i className="fas fa-check"></i> Custom domain</li>
              <li><i className="fas fa-check"></i> 24 hours support</li>
              <li><i className="fas fa-check"></i> Admin tools</li>
              <li><i className="fas fa-check"></i> Collaboration tools</li>
              <li><i className="fas fa-check"></i> User management</li>
            </ul>
            <button className="btn btn-outline">Get Started</button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
