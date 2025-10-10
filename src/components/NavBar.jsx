import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget.jsx";
import "./NavBar.css";

export const NavBar = () => {
  const categories = ["electronica", "ropa", "calzado", "accesorios"];

  return (
    <nav>
      <img
        src="https://www.taisa-designer.com/wp-content/uploads/2019/09/anton-darius-thesollers-xYIuqpHD2oQ-unsplash.jpg"
        alt="Logo"
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <NavLink to={`/category/${cat}`}>{cat}</NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
