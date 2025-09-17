import "./NavBar.css";
import { CartWidget } from "./CartWidget.jsx";

export const NavBar = () => (
  <nav>
    <img
      src="https://www.taisa-designer.com/wp-content/uploads/2019/09/anton-darius-thesollers-xYIuqpHD2oQ-unsplash.jpg"
      alt="Logo"
    />
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Catalog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    <CartWidget />
  </nav>
);
