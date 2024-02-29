import Nav from "../Components/Nav";

const Contact = (props) => {
  return (
    <>
      <header>
        <Nav home="" services="" projets="" blog="" contact="active"></Nav>
      </header>

      <main>
        <div className="container bg-light shadow p-3 mt-3 mb-5">
          <div className="row text-center">
            <h3 className="text-uppercase">Me contacter</h3>
            <p>
              Pour me contacter en vue d'un entretien ou d'une futur
              collaboration, merci de remplir le formulaire de contact.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4>Formulaire de contact</h4>
              <form>
                <div className="mb-3">
                  <label for="exampleInputName1" className="form-label">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="exemple: Patrick"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <p className="form-text">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPhone1" className="form-label">
                    Votre numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputPhone1"
                    placeholder="06 29 .. .. .."
                  />
                </div>

                <div>
                  <label for="exampleInputSubject1" className="form-label">
                    Objet
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSubject1"
                    placeholder="Sujet"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Zone de texte
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Votre message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <h4>Mes coordonnées</h4>
              <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p>06 20 30 40 50</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540515!2d4.796403975954872!3d45.778665712402564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1707742043915!5m2!1sfr!2sfr"
                allowfullscreen=""
                title="Maps"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
