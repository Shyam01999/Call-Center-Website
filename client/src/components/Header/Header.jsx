import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const pages = [
    {
      path: "/",
      name: "Home",
      // icon: <MdDashboard />,
    },
    {
      path: "/aboutus",
      name: "About US",
      // icon: <MdDashboard />,
    },
    {
      path: "/contactus",
      name: "Contact US",
      // icon: <MdDashboard />,
    },
  ];

  const theme = useSelector((state) => state.themeReducer.theme);

  const toggleTheme = () => {
    dispatch(toggleTheme());
  };
  
  return (
    <header className={`section-navbar`}>
      <div className={`container`}>
        {/* <div className="logo-container">
          <Link to="/">
            <img
              src={theme === "light" ? brandlogo : whitebrandlogo}
              alt="Vliv brand Logo"
              width="100"
              height="auto"
            />
          </Link>
        </div> */}
        <nav className={`nav-container `}>
          {pages.map((page, index) => {
            // if (page.subRoutes) {
            //     return (
            //         <NavbarMenu
            //             setIsOpen={setIsOpen}
            //             route={page}
            //             // showAnimation={showAnimation}
            //             isOpen={isOpen}
            //             key={index}
            //             handleMenuModal={handleMenuModal}
            //         />
            //     );
            // }
            return (
              <NavLink
                to={page.path}
                key={index}
                className={`navlink ${theme === "light" ? "light" : "dark"}`}
                sx={{ my: 2, mx: 1, color: "black", display: "flex" }}
              >
                {page.name}
              </NavLink>
            );
          })}
        </nav>
        {/* <div className="button-container">
          <span
            className={`modeicon ${theme === "light" ? "light" : "dark"}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? <IoIosMoon /> : <IoIosSunny />}{" "}
          </span>
          {location.pathname != "/contactus" && (
            <button
              className={`commonBtn ${theme == "light" ? "light" : "dark"}`}
              onClick={handleContactForm}
            >
              Get Early Access
            </button>
          )}
        </div> */}
      </div>
    </header>
  );
}

export default Header;
