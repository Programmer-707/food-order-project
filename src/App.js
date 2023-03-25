import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartShown, setIsCartShown] = useState(false)

  const showCart = () => {
    setIsCartShown(true)
  }

  const hideCart = () => {
    setIsCartShown(false)
  }

  return (
    <>
      {isCartShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
