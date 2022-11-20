import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  let { pathname } = useLocation();
  const [currentLocation, setCurrentLocation] = useState("/");
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const removeLinkStyles = {
    textDecoration: "none",
    color: "#0d323d",
    alignSelf: "center",
  };

  useEffect(() => {
    setCurrentLocation(pathname.split("/")[1]);
    console.log(root.client)

    const fixHamburgerBug = () => {
      //This function fixes a bug with the hamburger icon, that happens when switching the screen sizes as the menu is opened.
      const width = document.getElementById('width').clientWidth;
      if (width > 1220) {
        setIsHamburgerActive(false);
      } else if (width <= 1220) {
        setIsHamburgerActive(true);
      }
    };

    window.addEventListener("resize", fixHamburgerBug);
  }, [pathname, isHamburgerActive]);

  const activateHamburger = () => {
    setIsHamburgerActive((prevIsHamburgerActive) => {
      return !prevIsHamburgerActive;
    });
  };

  return (
    <nav>
      <div className="language-selector-container">
        <div className="language-selector">
          <i className="fas fa-language" alt="language icon"></i>
          <select>
            <option value="en">Language (English)</option>
          </select>
        </div>
      </div>
      <div className="nav-body">
        <div className="nav-body--right">
          <div className="logo">
            <span className="stronger-text">Oswa</span>Tech
          </div>
          <div className="nav-links">
            <Link to="/" style={removeLinkStyles}>
              <p
                className={`nav-links--link ${
                  currentLocation === "" && "link-selected"
                }`}
              >
                Home
              </p>
            </Link>
            <Link to="/buy" style={removeLinkStyles}>
              <p
                className={`nav-links--link ${
                  currentLocation === "buy" && "link-selected"
                }`}
              >
                Buy
              </p>
            </Link>
            <Link to="/rent" style={removeLinkStyles}>
              <p
                className={`nav-links--link ${
                  currentLocation === "rent" && "link-selected"
                }`}
              >
                Rent
              </p>
            </Link>
          </div>
        </div>
        <div
          className={isHamburgerActive ? "active-hamburger" : "nav-body--left"}
        >
          <div className="nav-about-us">
            <p className="nav-about-us--about thin-text">About Us</p>
            <p className="nav-about-us--contact thin-text">Contact Us</p>
          </div>
          <div className="nav-login">
            <Link to={"/login"} style={removeLinkStyles}>
              <p className="nav-login--login regular-text">LOG IN</p>
            </Link>
            <p className="nav-login--signup regular-text">SIGN UP</p>
          </div>
        </div>
        <div
          className={isHamburgerActive ? "rotate-hamburger" : "hamburger"}
          onClick={activateHamburger}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
