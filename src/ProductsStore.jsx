const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 3.99,
    desc: "Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, ...",
  },
  {
    id: "2",
    title: "sunglasses",
    price: 4.99,
    desc: "Shop online for Sunglasses - Eyewear & Accessories from a huge selection of popular items in Egypt. Souq is now Amazon.eg. Free shipping & Cash on delivery ...",
  },
  {
    id: "3",
    title: "Camera",
    price: 94.99,
    desc: "Capture detailed shots in low-light situations, and unleash your creativity with features like Portrait mode, Night Mode, Live Photos, slo-mo, time-lapse, ...",
  },
];


function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data not exist for ID : " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
