import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";

export default function Khalti({total_amount}) {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: total_amount * 100 })}
        style={buttonStyles}
      >
        Book
      </button>
    </div>
    // <h1>This is khalti</h1>
  );
}