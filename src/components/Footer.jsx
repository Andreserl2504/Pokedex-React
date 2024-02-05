import { GitHubLogo, EmailLogo, InstagramLogo } from "./icons/Logos";
import "../Styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer bg-solidGray-default">
      <div className="links-footer-container">
        <div>
          <a
            href="https://github.com/Andreserl2504"
            target="_blank"
            className="link-footer"
            rel="noreferrer"
          >
            <GitHubLogo className="social-icon" />
          </a>
        </div>
        <div>
          <a
            href="mailto:andres.rodriguezv05@gmail.com"
            className="link-footer"
          >
            <EmailLogo className="social-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/and.sez?igsh=anltcHhnMzhkYTJu"
            target="_blank"
            className="link-footer"
            rel="noreferrer"
          >
            <InstagramLogo className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
