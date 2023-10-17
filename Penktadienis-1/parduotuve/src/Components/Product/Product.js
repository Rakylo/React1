import React, { useState } from "react";
import Button from "../Button/Button";

export default function Product() {
  const [Pridedam, setPridedam] = useState(0);

  const incrementProductCount = () => {
    setPridedam(Pridedam + 1);
  };

  const decrementProductCount = () => {
    setPridedam(Pridedam - 1);
  };

  return (
    <div className="flex">
      <div>
        <img
          className="image"
          src="https://www.promocalendarsdirect.com/images/content/calendar/2024/2024_calendar-exotic-cars_0036_14.jpg"
          alt="product"
        />
      </div>
      <div>
        <h1>Volkswagen Golf MK2 2023 Calendar</h1>
        <h3>10.00 €</h3>
        <p>12 unique designs</p>
        <p>All pieces are printed on heavyweight 200 gsm art paper</p>
        <p>Limited to 50 pieces</p>
        <p>One size:</p>
        <p>11,7x16,5 inch / (297x420mm)</p>
        <div className="oneline">
          <h5>
            Availability <p>10 in stock</p>
          </h5>
        </div>
        <div class="number">
          <button onClick={incrementProductCount}>+</button>
          <h2>Products in Cart: {Pridedam}</h2>

          <button onClick={decrementProductCount}>-</button>
          <Button />
        </div>
        <h6>Category: Calendars</h6>
      </div>
    </div>
  );
}
