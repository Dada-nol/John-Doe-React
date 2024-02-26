const Projets = () => {
  return (
    <div className="container">
      <div className="row text-center m-3">
        <h3 className="text-uppercase">Portfolio</h3>
        <p>Voici quelques-unes de mes réalisations</p>
      </div>
      <div className="row m-4 gy-3">
        <div className="col-md-4">
          <div className="card">
            <img
              src="../assets/img/CDC.png"
              className="card-img-top mx-auto d-bloc mt-3"
              alt="sommaire d'un cahier des charges"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Cahier des charges</h5>
              <p className="card-text">Réalisation d'un cahier des charges</p>
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
            <img
              src="../assets/img/htmlcss.png"
              className="card-img-top mx-auto d-bloc mt-3"
              alt="screenshot d'un CV"
            />
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
            <img
              src="../assets/img/javascript.png"
              className="card-img-top mx-auto d-bloc mt-3"
              alt="screenshot d'un espace commentaire"
            />
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
  );
};

export default Projets;
