import { Container } from './Container';

export default function Footer(){
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-top">
          <a href="#" className="footer-brand">Startup 3</a>
          <div className="footer-right">
            <div className="footer-policy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-social">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-nav">
            <a href="#">Tour</a>
            <a href="#">Features</a>
            <a href="#">Pricing Plans</a>
            <a href="#">Our Works</a>
            <a href="#">Brands</a>
            <a href="#">Contacts</a>
          </div>
          <div className="footer-copyright">
            © 2017 Designmodo. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
