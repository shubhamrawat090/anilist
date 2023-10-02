import { BsGrid } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="font-sans flex justify-center w-full shadow-navbar bg-bannerBg-light">
        <div className="flex w-11/12 max-w-maxContent items-center justify-between py-5 gap-6">
          {/* Logo/Title of website */}
          <div className="text-textLight text-2xl font-semibold">
            <Link to={"/"}>Animeniac</Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-4 items-center">
            <li className="text-textLight-2 font-medium">
              <NavLink to={"/"}>All</NavLink>
            </li>
            <li className="text-textLight-2 font-medium">
              <NavLink to={"/top-100"}>Top&nbsp;100</NavLink>
            </li>
            <li className="text-textLight-2 font-medium">
              <NavLink to={"/genres"}>Genres</NavLink>
            </li>
            <li className="text-textLight-2 font-medium">
              <NavLink to={"/categories"}>Categories</NavLink>
            </li>
            <li className="text-textLight-2 font-medium">
              <NavLink to={"/random"}>Random</NavLink>
            </li>
          </ul>

          {/* Input box to type and search anime */}
          <div className="flex gap-2 items-center p-1 rounded-[2rem] overflow-hidden bg-bannerBg-light-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-textLight-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="text-sm text-textLight-2 placeholder:text-textLight-2 bg-bannerBg-light-2 outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="flex gap-2 items-center">
            {/* Dark Mode - Moon icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-textLight-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>

            {/* Light Mode - Sun icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-textLight-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>

            {/* Hamburger Menu */}
            <div className="flex flex-col">
              <BsGrid className="w-5 h-5 text-textLight-2" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      <div className="w-full bg-bannerBg-light mt-1 py-5 relative">
        {/* Close Button */}
        <button className="absolute right-4 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-textLight-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Input box to type and search anime */}
        <div className="flex gap-2 items-center my-4 p-1 rounded-[2rem] overflow-hidden bg-bannerBg-light-2 w-[50vw] max-w-[750px] mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-textLight-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-full text-sm text-center text-textLight-2 placeholder:text-textLight-2 bg-bannerBg-light-2 outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 items-center text-center">
          <li className="w-full text-textLight-2 font-medium">
            <NavLink to={"/"}>All</NavLink>
          </li>
          <li className="w-full text-textLight-2 font-medium">
            <NavLink to={"/top-100"}>Top&nbsp;100</NavLink>
          </li>
          <li className="w-full text-textLight-2 font-medium">
            <NavLink to={"/genres"}>Genres</NavLink>
          </li>
          <li className="w-full text-textLight-2 font-medium">
            <NavLink to={"/categories"}>Categories</NavLink>
          </li>
          <li className="w-full text-textLight-2 font-medium">
            <NavLink to={"/random"}>Random</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
