import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const { tg } = useTelegram();

  if (cartItems.length === 0) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
    tg.MainButton.setParams({
      text: "Оформить заказ"
    })
  }

  return (
    <div className="cart__container">
      <br /> <span className="">Сумма заказа: {totalPrice.toFixed(2)} руб.</span>
      <Button
        title={`${cartItems.length === 0 ? "Заказать" : "Checkout"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
