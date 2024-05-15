import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Header = () => {
  const is768p = useMediaQuery({ query: "(max-width: 768px)" });
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-white p-8 h-[110px] font-custom flex items-center justify-center tablet:justify-between  transition-all ease-linear">

      {is768p && (
        <div>
          <p className="text-[36px] text-texts !font-Abhaya-Libre ">E & H</p>
        </div>
      )}

      {/* Menu */}
      <nav className="flex items-center">
        {is768p ? (
          <>
            <button
              className="flex items-center p-2 text-texts hover:text-black transition-all"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {isNavOpen && (
              <ul className="text-texts text-xl flex flex-col items-end space-y-3 text-[20px] !font-CormorantUnicase-Bold absolute top-[110px] z-10 left-0 w-full bg-white p-4 shadow-xl">
                <li className="hover:scale-125 transition-all">
                  <NavLink
                    to="/"
                    className="hover:text-black transition-all w-full text-left"
                    onClick={() => setIsNavOpen(false)}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="hover:scale-125 transition-all">
                  <NavLink
                    to="/photo-album"
                    className="hover:text-black transition-all w-full text-left"
                    onClick={() => setIsNavOpen(false)}
                  >
                    PHOTO ALBUM
                  </NavLink>
                </li>
                <li className="hover:scale-125 transition-all">
                  <NavLink
                    to="/about"
                    className="hover:text-black transition-all w-full text-left"
                    onClick={() => setIsNavOpen(false)}
                  >
                    ABOUT
                  </NavLink>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="text-texts text-xl flex space-x-32 text-[20px] !font-CormorantUnicase-Bold">
            <li className="hover:scale-125 transition-all">
              <NavLink to="/" className="hover:text-black transition-all">
                HOME
              </NavLink>
            </li>
            <li className="hover:scale-125 transition-all">
              <NavLink
                to="/photo-album"
                className="hover:text-black transition-all"
              >
                PHOTO ALBUM
              </NavLink>
            </li>
            <li className="hover:scale-125 transition-all">
              <NavLink to="/about" className="hover:text-black transition-all">
                ABOUT
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
