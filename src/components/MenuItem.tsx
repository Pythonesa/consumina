import type { MenuItem as MenuItemType } from "../types"

type MenuItemProps = {
  item : MenuItemType
}
export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </li>
  )
}

