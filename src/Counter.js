import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Cart Items : {count}</p>
      <button onClick={() => setCount(count + 1)}>Add to cart?</button>
    </div>
  );
}
