import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addToOrder = (item: MenuItem) => {
    const newOrder = [...order];
    if (newOrder.find((i: OrderItem) => i.id === item.id)) {
      newOrder[newOrder.findIndex((i) => i.id === item.id)].quantity++;
    } else {
      newOrder.push({ ...item, quantity: 1 });
    }
    setOrder(newOrder);
  };

  return {
    addToOrder,
    order,
  };
}
