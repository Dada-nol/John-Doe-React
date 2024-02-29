import Footer from "../Components/Footer";
import Img from "../Components/Image";
import Nav from "../Components/Nav";

const Projets = () => {
  return (
    <>
      <header>
        <Nav home="" services="" projets="active" blog="" contact=""></Nav>
      </header>

      <main>
        <div className="container">
          <div className="row text-center m-3">
            <h3 className="text-uppercase">Portfolio</h3>
            <p>Voici quelques-unes de mes réalisations</p>
          </div>
          <div className="row m-4 gy-3">
            <div className="col-md-4">
              <div className="card">
                <Img
                  src="CDC"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="sommaire d'un cahier des charges"
                ></Img>
                <div className="card-body text-center">
                  <h5 className="card-title">Cahier des charges</h5>
                  <p className="card-text">
                    Réalisation d'un cahier des charges
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/Dada-nol/CV-Darren.git"
                    className="btn btn-primary"
                    rel="noreferrer"
                    /* Modifier le href */
                  >
                    Voir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Img
                  src="htmlcss"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="screenshot d'un CV"
                ></Img>
                <div className="card-body text-center">
                  <h5 className="card-title">Curriculum-vitae</h5>
                  <p className="card-text">Réalisation d'un CV en HTML/CSS</p>
                  <a
                    target="_blank"
                    href="https://github.com/Dada-nol/CV-Darren.git"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Voir
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Img
                  src="javascript"
                  format="png"
                  className="card-img-top mx-auto d-bloc mt-3"
                  alt="screenshot d'un espace commentaire"
                ></Img>
                <div className="card-body text-center">
                  <h5 className="card-title">Espace commentaire</h5>
                  <p className="card-text">
                    Réalisation d'un espace commentaire avec Javascript
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/Dada-nol/Dynamiser-un-espace-commentaire.git"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Voir
                  </a>
                </div>
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

export default Projets;
