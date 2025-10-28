# Proyecto Tienda Online - Entrega 3

## Descripción
Tienda online desarrollada con **React** y **Firebase**, donde los usuarios pueden:

- Visualizar un listado de productos.
- Filtrar productos por categorías.
- Ver detalles de cada producto.
- Agregar productos al carrito.
- Finalizar compras mediante un checkout que genera un registro en **Firestore**.

---

## Tecnologías utilizadas
- **React.js** (componentes funcionales y hooks)
- **React Router v6**
- **Firebase Firestore y Storage**
- **Context API** para manejo del carrito
- **CSS** para estilos
- **Vite** como bundler y servidor de desarrollo

---

## Componentes principales

- **App**: Contenedor principal, define rutas y ErrorBoundary.  
- **NavBar**: Barra de navegación con enlaces y carrito (`CartWidget`).  
- **CartWidget**: Icono del carrito con total de unidades.  
- **ItemListContainer**: Trae productos de Firebase y maneja loaders/errores.  
- **ItemList**: Presentación de productos en grilla.  
- **Item**: Componente individual de producto.  
- **ItemDetailContainer**: Trae detalles de un producto específico.  
- **ItemDetail**: Presentación del detalle de producto, integra `ItemCount`.  
- **ItemCount**: Selección de cantidad a agregar al carrito, valida stock.  
- **Cart**: Lista de productos agregados, subtotales y total.  
- **CartItem**: Presentación de un producto dentro del carrito.  
- **CheckoutForm**: Formulario de compra, genera orden en Firestore y muestra ID al usuario.

---

## Funcionalidades implementadas
- Listado dinámico de productos desde Firebase.
- Filtro por categorías usando React Router.
- Carrito persistente con Context API.
- Renderizado condicional: loaders, mensajes de stock y carrito vacío.
- Generación de orden en Firestore al finalizar compra.
- Manejo de errores con `ErrorBoundary` y fallback de imágenes.
- Navegación completa entre catálogo, detalle, carrito y checkout.

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/fabimartinez556/react_app-Martinez.git
cd react_app


