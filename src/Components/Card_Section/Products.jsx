import Cart from "../../Pages/Cart/Cart";

const Products = (props) => {
  console.log(props);
  const { image, title, discount, dealsName, button, price } = props.data;
  const style = {
    padding: "10px 20px",
    color: "white",
    fontSize: "13px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
    backgroundColor: "#2874f0",
    border: "1px solid #2874f0",
    borderRadius: "2px",
    cursor: "pointer",
    fontWeight: "500",
    margin: "20px 20px",
  };

  const changePage = () => {
    console.log("check");
    return;
    <Cart />;
  };

  return (
    <div className="item">
      <img src={image} width="180" alt="" />
      <p>{title}</p>
      <h5>₹{price}</h5>
      <h6>{dealsName}</h6>
      <button onClick={changePage} style={style}>
        {button}
      </button>
    </div>
  );
};
export default Products;
