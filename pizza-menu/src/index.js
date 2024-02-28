import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //imported css

// -------------------------------------------------------Data Array----------------------------------------
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
console.log(pizzaData);
// -------------------------------------------------------Header Section----------------------------------------
function Header() {
  return (
    <header className="header">
      <h1>Indian Pizza House </h1>;
    </header>
  );
}
// -------------------------------------------------------Menu Section----------------------------------------
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 😊</p>
      )}

      {/* {<Pizza
        name="Focaccia"
        photoName="pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
      />

      <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, Mozarella, Spinach & Ricotta Cheese"
        price={10}
      />} */}
    </main>
  );
}

// -------------------------------------------------------Pizza Data Render----------------------------------------
function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>

        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}
// -------------------------------------------------------Footer Section----------------------------------------
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (isOpen) alert("We're Currently Open!");
  // else alert("Sorry! We're closed");

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 - {closeHour}:00
        </p>
      )}
    </footer>
  );
}
// -------------------------------------------------------Order Section----------------------------------------
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're Open Until !, {closeHour}:00. Come Visit Us or Order</p>
      <button className="btn">Order</button>
    </div>
  );
}

// -------------------------------------------------------Root Container----------------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>
);
