import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
  if(cartCount > 0){
    setCartCount(cartCount - 1);
  }
  };

  return (
    <>
      <Header count={cartCount} />

      <div className="products">

        <ProductCard
         name="iPhone 15"
         price="79999"
         image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
         addToCart={addToCart}
         removeFromCart={removeFromCart}
       />

        <ProductCard
          name="Samsung S24"
          price="69999"
          image="https://images.unsplash.com/photo-1598327105666-5b89351aff97"
          addToCart={addToCart}
        />

        <ProductCard
          name="OnePlus 12"
          price="59999"
          image="https://images.unsplash.com/photo-1580910051074-3eb694886505"
          addToCart={addToCart}
        />

      </div>
    </>
  );
}

export default App;