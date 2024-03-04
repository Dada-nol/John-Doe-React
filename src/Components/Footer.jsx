import { Link } from "react-router-dom";
import ScrollButton from "./ScrollButton";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary-subtle">
        <ScrollButton></ScrollButton>
        <div className="container text-center p-3">
          <div className="row">
            <div className="col-lg col-md-6">
              <h5>Jhon Doe</h5>
              <p>40 Rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone : 06 20 30 40 50</p>
              <a
                target="_blank"
                href="https://github.com/github-john-doe"
                rel="noreferrer"
              >
                <img src="img/github.png" alt="Github" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/darren.nardol.7/"
                rel="noreferrer"
              >
                <img src="img/facebook(1).png" alt="facebook" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dada_nol/"
                rel="noreferrer"
              >
                <img src="img/instagram.png" alt="instagram" />
              </a>
            </div>
            <div className="col-lg col-md-6">
              <h5>Liens utiles</h5>
              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <Link to="/">Home</Link>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>
                <Link to="/services">Services</Link>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <Link to="/contact">Me contacter</Link>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <Link to="/mL">Mentions légales</Link>
              </div>
              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <Link to="/profil">Profil Github</Link>
              </div>
            </div>
            <div className="col-lg col-md-6">
              <h5>Mes dernières réalisations</h5>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>
                <a
                  target="_blank"
                  href="https://github.com/Dada-nol/Premier-cahier-des-charges.git"
                  rel="noreferrer"
                >
                  Projet 1
                </a>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <a
                  target="_blank"
                  href="https://github.com/Dada-nol/CV-Darren.git"
                  rel="noreferrer"
                >
                  Projet 2
                </a>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <a
                  target="_blank"
                  href="https://github.com/Dada-nol/Dynamiser-un-espace-commentaire.git"
                  rel="noreferrer"
                >
                  Projet 3
                </a>
              </div>
            </div>
            <div className="col-lg col-md-6">
              <h5>Mes derniers articles</h5>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design"
                  rel="noreferrer"
                >
                  Article 1
                </a>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Glossary/SEO"
                  rel="noreferrer"
                >
                  Article 2
                </a>
              </div>

              <div>
                <svg
                  className="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.2 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.2 0l192 192z" />
                </svg>

                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Learn"
                  rel="noreferrer"
                >
                  Article 2
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center bg-secondary text-light">
          Designed by Jhon Doe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
