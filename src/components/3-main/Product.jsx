
function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p> Price: {product.price}$</p>
       
        </div>
      </div>
    </>
  );
}

export default Product;
