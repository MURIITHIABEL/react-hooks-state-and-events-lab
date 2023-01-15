import React,{useState}  from "react";

function Item({ name, category }) {

  const [buyProd, setProd] = useState(false)

  const addToCart = ()=>{
    setProd(true);
    
  }

  return (
    <li className={buyProd ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
