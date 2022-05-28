import Products from "./Products";

const Card = () => {
  const ProductItems = [
    {
      image: "swiss-republic.jpeg",
      title: "Towel",
      id: "1",
      price: "1199",
      dealsName: "super saver deal",
      button: "Add to Card",
    },
    {
      image: "simple-chawla.jpeg",
      title: "Floor Covering",
      id: "2",
      price: "1599",
      dealsName: "Door mates, carpet & more",
      button: "Add to Card",
    },
    {
      image: "double-bed.jpeg",
      title: "Mosquito Nets",
      id: "3",
      price: "999",
      dealsName: "Exciting offer",
      button: "Add to Card",
    },
    {
      image: "cushion-cover.jpeg",
      title: "Cushion Covers",
      id: "4",
      price: "499",
      dealsName: "Top deals to steal",
      button: "Add to Card",
    },
    {
      image: "double-bedsheet.jpeg",
      title: "Designer Bedsheets",
      id: "5",
      price: "1299",
      dealsName: "Best Offer",
      button: "Add to Card",
    },
    {
      image: "swiss-republic.jpeg",
      title: "Towel",
      id: "6",
      price: "1799",
      dealsName: "super saver deal",
      button: "Add to Card",
    },
    {
      image: "simple-chawla.jpeg",
      title: "Floor Covering",
      id: "7",
      price: "1199",
      dealsName: "Door mates, carpet & more",
      button: "Add to Card",
    },
  ];

  const ProductList = ProductItems.map((data, index) => {
    return (
      <>
        <Products key={index} data={data} />
      </>
    );
  });

  return (
    <>
      <div className="category-head">
        <h2>Best Selling</h2>
        <button>View all</button>
      </div>
      <div className="card-box">{ProductList}</div>
    </>
  );
};
export default Card;
