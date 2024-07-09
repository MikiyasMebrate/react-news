import { NavLink, Outlet } from "react-router-dom";

let NavBar = () => {
  return (
    <>
      <header className="clearfix header-style5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <a className="search-button" href="#">
                <i className="fa fa-search"></i>
              </a>
              <form className="form-search">
                <input type="search" placeholder="Search:" />
              </form>
              <ul className="navbar-nav m-auto">
                <li className="drop-link">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="drop-link">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : ""
                    }
                    to="/news"
                  >
                    News
                  </NavLink>
                </li>
                <li className="drop-link">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : ""
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="drop-link">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : ""
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto social-list">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
