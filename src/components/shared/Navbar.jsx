import { Link } from "react-router-dom";

const Navbar = () => {
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
              {navOptions.map((nav) => {
                return (
                  <Link to={nav.link} className="p-1 font-semibold border-b">
                    {nav.text}
                  </Link>
                );
              })}
            </ul>
          </div>
          <a className="font-bold text-md md:text-xl">Product Find</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 menu-horizontal px-1">
            {navOptions.map((nav) => {
              return (
                <Link to={nav.link} className="font-semibold uppercase">
                  {nav.text}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-error text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
