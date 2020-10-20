import React, { createContext, useState } from "react";

export const globalContext = createContext();

export default function GlobalContextProvider(props) {
  const [products, setProducts] = useState(null);
  return (
    <globalContext.Provider value={{ products }}>
      {props.children}
    </globalContext.Provider>
  );
}
