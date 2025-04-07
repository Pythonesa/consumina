import { MenuItem } from "./components/MenuItem";
import { menuItems } from "./data/fakeDB";

function App() {
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
              <MenuItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div id="cart">
          <h2>Orden</h2>
        </div>
      </main>
    </>
  );
}

export default App;
