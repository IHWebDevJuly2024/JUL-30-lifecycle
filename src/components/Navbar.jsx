import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Creating the component with const declaration and the export at the beginning
export const Navbar = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/list"
      >
        List
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};
