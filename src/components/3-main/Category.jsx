import { Box, Button } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";


const Category = () => {
  const [category, setCategories] = useState([]);
  const theme = useTheme();
  const fetchCategoryData = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
      }}
    >
      {category.map((cat) => {
        return (
          <Button
            sx={{
              width: 222,
              margin: "10px",
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.secondary,
              "&:hover": {
                opacity: "0.7",
              },
            }}
            key={cat}
          >
            {cat}
          </Button>
        );
      })}
    </Box>
  );
};

export default Category;
