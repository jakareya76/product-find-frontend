import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import defaultProfile from "../../assets/profile.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { logoutUser, user, loading } = useContext(AuthContext);
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-3  dropdown-content bg-base-100 rounded z-[1] mt-5 w-36 p-2 shadow"
            >
              {navOptions.map((nav, idx) => {
                return (
                  <Link
                    to={nav.link}
                    key={idx}
                    className="p-1 font-semibold border-b"
                  >
                    {nav.text}
                  </Link>
                );
              })}
            </ul>
          </div>
          <img src={logo} alt="logo" className="w-14" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 menu-horizontal px-1">
            {navOptions.map((nav, idx) => {
              return (
                <Link
                  to={nav.link}
                  key={idx}
                  className="font-semibold uppercase"
                >
                  {nav.text}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <>
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="profile"
                          src={user?.photoURL || defaultProfile}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <Link to="/profile" className="justify-between">
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => logoutUser()}
                    className="btn btn-neutral text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary text-white">
                    Login
                  </Link>
                  <Link to="signup" className="btn btn-neutral text-white">
                    Sign Up
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const navOptions = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Products",
    link: "/products",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default Navbar;
