import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, price } = food;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <div className="card__title">
        {title}
        <div>
          <span className="card__price">{price} руб.</span>
        </div>
      </div>

      <div className="btn-container">
        {count !== 0 ? (
          <Button title={"−"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
      </div>
    </div>
  );
}

export default Card;
