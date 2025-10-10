// productos de ejemplo
export const products = [
  {
    id: 1,
    title: "Auriculares inalámbricos",
    category: "electronica",
    price: 120,
    stock: 10,
    image: "/img/auriculares.jpg",
    description: "Auriculares bluetooth con excelente calidad de sonido.",
  },
  {
    id: 2,
    title: "Remera deportiva",
    category: "ropa",
    price: 35,
    stock: 20,
    image: "/img/remera.jpg",
    description: "Remera de algodón transpirable para entrenamientos.",
  },
  {
    id: 3,
    title: "Teclado mecánico",
    category: "electronica",
    price: 80,
    stock: 5,
    image: "/img/teclado.jpg",
    description: "Teclado mecánico RGB con switches silenciosos.",
  },
  {
    id: 4,
    title: "Zapatillas running",
    category: "calzado",
    price: 90,
    stock: 15,
    image: "/img/zapatillas.jpg",
    description: "Zapatillas ligeras y cómodas para correr todos los días.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};
