import Nav from "../Components/Nav";

const Home = () => {
  return (
    <>
      <header>
        <Nav home="active" services="" projets="" blog="" contact=""></Nav>
      </header>

      <main>
        <section class="custom-container container-fluid">
          <div class="masthead">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h1>Bonjour, je suis John Doe</h1>
              <h2>Développeur web full stack</h2>
              <a
                class="btn btn-primary col-sm-3 col-md-2"
                href="#AboutMe"
                role="button"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </section>

        <section id="AboutMe" class="container bg-light shadow p-3 mt-3 mb-5">
          <div class="row">
            <div class="col">
              <h3 class="mb-5 mt-2 text-uppercase">À propos</h3>
              <p>
                Passionné par l'informatique et les nouvelles technologie, j'ai
                suivi une fomation d'<b>intégrateur-développeur web</b> au CEF.
                Au cours de cette formation, j'ai pu acquérir des bases solides
                pour travailler dans le domaine du <b>développement web</b>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consilider ma formation de
                <b>développeur full stack</b>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques web.
              </p>
            </div>
            <div class="col">
              <img
                src="./assets/img/1670338567903.jpg"
                alt="Un jeune homme noir avec des lunettes, vue de face"
              />
              <h3>Mes compétences</h3>

              <div>
                <p>HTML5 90%</p>
                <div
                  class="progress mb-3"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-success"></div>
                </div>
              </div>

              <div>
                <p>CSS3 80%</p>
                <div
                  class="progress mb-3"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-info"></div>
                </div>
              </div>

              <div>
                <p>JAVASCRIPT 70%</p>
                <div
                  class="progress mb-3"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-warning"></div>
                </div>
              </div>

              <div>
                <p>REACT 50%</p>
                <div
                  class="progress mb-3"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar bg-danger"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
