import type { MenuItem as MenuItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType,
  addItem: (item: MenuItemType) => void;
};
export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <li onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </li>
  );
};
