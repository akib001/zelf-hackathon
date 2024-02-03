import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container footer">
        <div class="legal-container">
          <div class="legal-contents">
            <ul>
              <li>
                <a href="/terms-and-conditions" rel="noopener noreferrer">
                  Terms and service
                </a>
              </li>
              <li>
                <a href="/privacy-and-security" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/accessibility" rel="noopener noreferrer">
                  DMCA
                </a>
              </li>
            </ul>
            <div className="footer-right-container">
              <p>© All rights reserved by Zelf. 2022</p>
              <a href="/">
                <img src="/instagram.svg" alt="instagram" />
              </a>
              <a href="/">
                <img src="/tiktok.svg" alt="tiktok" />
              </a>
              <a href="/">
                <img src="/facebook.svg" alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
