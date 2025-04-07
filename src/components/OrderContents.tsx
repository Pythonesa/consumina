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
  if (order.length === 0) {
    return <p>La orden esta vacía</p>;
  } else {
    //TODO: Subtotal, Tip & Total section
    const subtotal : number = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const radioButtons = document.querySelectorAll('input[name="propina"]');
    let percent = 0;
    for (const radioButton of radioButtons) {
      if ((radioButton as HTMLInputElement).checked) {
        percent = parseInt((radioButton as HTMLInputElement).value);
        break;
      }
    }
    const propina : number = subtotal * percent;
    const total : number = subtotal + propina;
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
            <div>
              <label htmlFor="propina5">5%</label>
              <input type="radio" name="propina" value="5" id="propina5" />
            </div>
            <div>
              <label htmlFor="propina10">10%</label>
              <input type="radio" name="propina" value="10" id="propina10" />
            </div>
            <div>
              <label htmlFor="propina15">15%</label>
              <input type="radio" name="propina" value="15" id="propina15" />
            </div>
          </div>
        </div>
      </>
    );
  }
};
