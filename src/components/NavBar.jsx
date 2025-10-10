import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { CartWidget } from "./CartWidget";

import "./NavBar.css";

export const NavBar = () => {
  const categories = ["electronica", "ropa", "calzado", "accesorios"];
  const [showCart, setShowCart] = useState(false); // <--- estado para mostrar carrito

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

      {/* abrimos el carrito */}
      <div onClick={() => setShowCart(true)} style={{ cursor: "pointer" }}>
        <CartWidget />
      </div>

      {/* Mostrar el carrito si es true */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </nav>
  );
};
