import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white p-8 h-[110px] font-custom flex">
      <nav className="container mx-auto flex items-center justify-center">
        <ul className="text-texts text-xl flex space-x-72 text-[20px] font-medium">
          <li className="hover:scale-125 transition-all">
            <NavLink to="/" className="hover:text-black  transition-all">
              Home
            </NavLink>
          </li>

          <li className="hover:scale-125 transition-all">
            <NavLink
              to="/photo-album"
              className="hover:text-black transition-all"
            >
              Photo Album
            </NavLink>
          </li>

          <li className="hover:scale-125 transition-all">
            <NavLink to="/about" className="hover:text-black transition-all">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
