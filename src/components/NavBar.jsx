import "./NavBar.css";
import { CartWidget } from "./CartWidget.jsx";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <nav>
    <img
      src="https://www.taisa-designer.com/wp-content/uploads/2019/09/anton-darius-thesollers-xYIuqpHD2oQ-unsplash.jpg"
      alt="Logo"
    />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category/electronica">Electrónica</Link>
      </li>
      <li>
        <Link to="/category/ropa">Ropa</Link>
      </li>
      <li>
        <Link to="/category/calzado">Calzado</Link>
      </li>
    </ul>
    <CartWidget />
  </nav>
);
