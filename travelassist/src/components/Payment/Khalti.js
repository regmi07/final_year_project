import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
import Button from '@mui/material/Button'

export default function Khalti({total_amount}) {
  let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <Button
        variant='contained'
        onClick={() => checkout.show({ amount: 1000 })}
      >
        Book
      </Button>
    </div>
  );
}