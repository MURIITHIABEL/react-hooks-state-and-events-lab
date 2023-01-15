import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [view, setView] = useState(true)
  const handleClick = ()=>{
    setView(!view)
  }

  return (
    <div className={view ? "App light":"App dark"} >
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{view ? 'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
