import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

//const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  /*  useEffect(() => {
      tele.ready();
    });
    */

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  /*const onCheckout = () => {
    tele.MainButton.text = "Заказать";
    tele.MainButton.show();
  };*/

  return (
    <>
      <Cart cartItems={cartItems} />
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;

/* import './App.css';
import Button from './Components/Button';
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  return (
    <div>
      <img src="../images/preloader.gif" alt="Loading..." />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Любая асинхронная операция, которая выполняется при первой загрузке страницы
    // Например, имитация задержки загрузки данных
    setTimeout(() => {
      setLoading(false);
    }, 12000);
  }, []);

  return (
    <div>
      {loading ? <Preloader /> : <h1>тест</h1>}
    </div>
  )
};

export default App; */
// < Button title={'Test'} disable={false} />