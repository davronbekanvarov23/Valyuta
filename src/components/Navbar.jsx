import ModalExample from "./Modal";

function SiteNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid container">
        <a className="navbar-brand" href="/">
          <img src="./logo.png" width={36} alt="Logo" />
        </a>
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
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/monitoring">
                Monitoring
              </a>
            </li>
          </ul>
        </div>

        <ModalExample />
      </div>
    </nav>
  );
}

export default SiteNavbar;
