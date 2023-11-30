import React from 'react'
import "./Button.css"

function Button({ type, title, disable, onClick }) {
    function createRipple(event) {
        const button = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }
    return (
        <button className={`btn ${(type === "add" && "add") ||
            (type === "remove" && "remove") ||
            (type === "checkout" && "checkout")
            }`}
            disabled={disable}
            onClick={onClick}
        >
            {title}

        </ button>
    )
}

export default Button
