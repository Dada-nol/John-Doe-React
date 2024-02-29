import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <Link className="navbar-brand text-light text-uppercase">
          Jhon DOE{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  mx-0 mx-lg-1">
              <Link
                className={`nav-link ${props.home} py-3 px-0 px-lg-3 rounded text-uppercase `}
                aria-current="page"
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className={`nav-link ${props.services} py-3 px-0 px-lg-3 rounded text-uppercase `}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className={`nav-link ${props.projets} py-3 px-0 px-lg-3 rounded text-uppercase `}
                to="/projets"
              >
                Réalisation
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className={`nav-link ${props.blog} py-3 px-0 px-lg-3 rounded text-uppercase `}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className={`nav-link ${props.contact} py-3 px-0 px-lg-3 rounded text-uppercase `}
                to="/contact"
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
