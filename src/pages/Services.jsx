import Nav from "../Components/Nav";

const Services = (props) => {
  return (
    <>
      <header>
        <Nav home="" services="active" projets="" blog="" contact=""></Nav>
      </header>

      <main className="container">
        <div className="row text-center m-3">
          <h3 className="text-uppercase">Mon offre de services</h3>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
        <div className="row m-4 gy-3">
          <div className="col-md-4">
            <div className="card">
              <svg
                className="card-img-top mx-auto d-bloc mt-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
              </svg>
              <div className="card-body text-center">
                <h5 className="card-title">UX design</h5>
                <p className="card-text">
                  L'<strong>UX Design</strong> est une méthode de conception
                  centrée sur l'utilisateur. Son but est d'offrir une expérience
                  de navigation optimale à l'internaute.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <svg
                className="card-img-top mx-auto d-bloc mt-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>
              <div className="card-body text-center">
                <h5 className="card-title">Déveleppement web</h5>
                <p className="card-text">
                  Le <strong>développement de sites web</strong> repose sur
                  l'utilisation des langages HTML, CSS, Javascript et PHP.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <svg
                className="card-img-top mx-auto d-bloc mt-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
              <div className="card-body text-center">
                <h5 className="card-title">Référencement</h5>
                <p className="card-text">
                  Le <strong>référencement naturel d'un site</strong>, aussi
                  appelé SEO, consiste à mettre des techniques en oeuvre pour
                  améliorer sa position dans les résultats des moteurs de
                  recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
