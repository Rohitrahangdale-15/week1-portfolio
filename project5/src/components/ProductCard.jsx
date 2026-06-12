function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>₹{props.price}</p>

      <button onClick={props.addToCart}>
       Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;