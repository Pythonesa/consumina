import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { menuItems } from "./data/fakeDB";
import useOrder from "./hooks/useOrder";


function App() {
  const { order, addToOrder, removeFromOrder } = useOrder()
  return (
    <>
      <header>
        <h1>Consumina</h1>
      </header>

      <main>
        <div id="menu">
          <h2>Menu</h2>
          <ul>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={() => addToOrder(item)} />
            ))}
          </ul>
        </div>
        <div id="cart">
          <h2>Orden</h2>
          <OrderContents order={order} removeFromOrder={removeFromOrder}/>
        </div>
      </main>
    </>
  );
}

export default App;
