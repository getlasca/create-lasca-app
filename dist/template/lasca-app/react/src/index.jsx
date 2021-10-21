import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [items, setItems] = useState([1]);

  const add = () => {
    setItems([...items, items.length == 0 ? 1 : Math.max(...items) + 1]);
  };

  const remove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return <lasca component="component_1"></lasca>;
};

ReactDOM.render(<App />, document.getElementById("app"));
