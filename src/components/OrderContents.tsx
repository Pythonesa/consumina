import { OrderItem } from "../types";
import type { ComponentProps } from "react";

type OrderContentsProps = ComponentProps<"ul"> & {
  order: OrderItem[];
}
export const OrderContents = ({order}: OrderContentsProps) => {
  if (order.length === 0) {
    return <p>La orden esta vacía</p>;
  } else {
    return (
      <ul>
        {order.map((item: OrderItem) => (
          <li key={item.id} className="orderItem">
            <div>
              <p>{item.name} - ${item.price}</p>
              <p>Cantidad: {item.quantity} - ${item.price * item.quantity}</p>
            </div>
            <button>X</button>
          </li>
        ))}
      </ul>
    );
  }
};
