import Footer from "../Components/Footer";
import Img from "../Components/Image";
import Nav from "../Components/Nav";

const Blog = () => {
  return (
    <>
      <header>
        <Nav home="" services="" projets="" blog="active" contact=""></Nav>
      </header>

      <main className="container">
        <div className="row text-center m-3">
          <h3 className="text-uppercase">Blog</h3>
          <p>Retrouvez ici quelques articles sur le développement web.</p>
        </div>
        <div className="row m-4 gy-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="programmer-1653351_640"
                  format="png"
                  className="card-img-top"
                  alt="dessin d'un homme avec du code en fond"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Web/HTML"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié le 22 août 2022
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="market-4856748_640"
                  format="jpg"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="dessin d'une rue avec son marché de fruit et legume"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://mailchimp.com/fr/resources/how-to-sell-a-product-online/"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié le 20 août 2022
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="magnifying-glass-76520_640"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="illustration de google avec une loope"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié le 1 août 2022
              </div>
            </div>
          </div>
        </div>

        <div className="row m-4 gy-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="computer-1231889_640"
                  format="jpg"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="une tablette, d'un télephone, et d'un ordinateur avec du code en fond"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Coder en responsive design</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié 31 juillet 2022
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="search-engine-optimization-1359430_640"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="le SEO et ses branches"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Glossary/SEO"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié le 30 juillet 2022
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <Img
                  src="web-1935737_640"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="ordinateur et des différents langages de programmation"
                ></Img>
              </div>

              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/fr/docs/Learn"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                Publié le juillet 2022
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Blog;
