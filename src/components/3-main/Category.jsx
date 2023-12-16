import { Box, Button } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import Product from "./Products";

const Category = () => {
  const [data, setData] = useState(allProducts);






  // const [items, setItems] = useState(Product);
  // const theme = useTheme();

  // const handelFilterCategory = (catItem) => {
  //   const updateItem = Product.filter(() => {
  //     return catItem.Category === catItem;
  //   });
  //   setItems(updateItem);
  // };

  return (
   <h1>hello</h1>
  );
};

export default Category;
