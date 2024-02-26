const ML = () => {
  return (
    <div className="container">
      <div className="row text-center text-uppercase m-4">
        <h3>Mentions légales</h3>
      </div>

      <div className="row mb-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h4>
                  <strong>John Doe</strong>
                </h4>
                <p>40 Rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>
                  <a href="tel:0620304050">06 20 30 40 50</a>
                </p>
                <p>
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h4>
                  <strong>Always Data</strong>
                </h4>
                <p>91 rue du Faubourg Saint Honoré</p>
                <p>75008 Paris</p>
                <p>
                  <a href="https://www.alwaysdata.com/fr/">
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h4>
                    <strong>Crédits</strong>
                  </h4>
                  <p>Site développé par John Doe, étudiant du CEF.</p>
                  <p>
                    Les images libres de droit sont issues du site
                    <a href="https://pixabay.com/">Pixabay</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ML;
