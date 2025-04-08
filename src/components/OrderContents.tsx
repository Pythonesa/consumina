import { useState } from "react";
import { OrderItem } from "../types";
import type { ComponentProps } from "react";

type OrderContentsProps = ComponentProps<"ul"> & {
  order: OrderItem[];
  removeFromOrder: (item: OrderItem) => void;
};

export const OrderContents = ({
  order,
  removeFromOrder,
}: OrderContentsProps) => {
  const [tipPercentage, setTipPercentage] = useState(0);

  if (order.length === 0) {
    return <p>La orden está vacía</p>;
  }

  const subtotal = order.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tip = (subtotal * tipPercentage) / 100;
  const total = subtotal + tip;

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(parseInt(e.target.value));
  };

  return (
    <>
      <ul>
        {order.map((item: OrderItem) => (
          <li key={item.id} className="orderItem">
            <div>
              <p>
                {item.name} - ${item.price}
              </p>
              <p>
                Cantidad: {item.quantity} - ${item.price * item.quantity}
              </p>
            </div>
            <button onClick={() => removeFromOrder(item)}>X</button>
          </li>
        ))}
      </ul>

      <div id="propina">
        <h2>Propina</h2>
        <div>
          {[5, 10, 15].map((percent) => (
            <div key={percent}>
              <label htmlFor={`propina${percent}`}>{percent}%</label>
              <input
                type="radio"
                name="propina"
                value={percent}
                id={`propina${percent}`}
                onChange={handleTipChange}
                checked={tipPercentage === percent}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Total y Propina</h2>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Propina: ${tip.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
        <button id="sendOrderButton">Enviar orden y pagar</button>
      </div>
    </>
  );
};
