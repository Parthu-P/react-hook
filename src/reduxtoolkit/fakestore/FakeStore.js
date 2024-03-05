import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartSlicer";

function FakeStore() {
  const dispatch = useDispatch();

  function handleAddCart(product) {
    dispatch(addToCart(product))
  }
  return (
    <div>
      <h3>FakeStore API</h3>
    </div>
  );
}

export default FakeStore;
