import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { globalContext } from "../context/globalContext";

export default function Form() {
  const { dispatch } = useContext(globalContext);

  const [file, setFile] = useState("");
  const [productname, setProductname] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append("file", file);
    form.append("productname", productname);
    form.append("productPrice", productPrice);
    form.append("productQuantity", productQuantity);

    try {
      const response = await axios.post(
        "http://localhost:5000/products/add",
        form
      );
      dispatch({
        type: "ADD_PRODUCT",
        payload: response.data,
      });
      setProductPrice("");
      setProductname("");
      setProductQuantity("");
      setFile("");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productname"
          onChange={(e) => {
            const { value } = e.target;
            setProductname(value);
          }}
          value={productname}
          placeholder="PRODUCTNAME"
        />
        <input
          type="number"
          name="productPrice"
          value={productPrice}
          placeholder="PRICE"
          onChange={(e) => {
            const { value } = e.target;
            setProductPrice(value);
          }}
        />
        <input
          type="number"
          name="productQuantity"
          value={productQuantity}
          placeholder="QUANTITY"
          onChange={(e) => {
            const { value } = e.target;
            setProductQuantity(value);
          }}
        />
        <label htmlFor="file" id="file">
          {" "}
          File :
        </label>
        <input
          id="file"
          type="file"
          placeholder="PRODUCTIMAGE"
          onChange={(e) => {
            const file = e.target.files[0];
            setFile(file);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
