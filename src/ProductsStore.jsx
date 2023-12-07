const ProductsArray = [
  {
    id: "1",
    title: "Coffee",
    Price: 3.99,
  },
  {
    id: "2",
    title: "sunglasses",
    price: 4.99,
  },
  {
    id: "3",
    title: "Camera",
    Price: 94.99,
  },
];

function getProductData(id) {
  let productData = ProductsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data not exist for ID : " + id);
      return undefined;
  }
 return productData;
}

export { ProductsArray , getProductData };
