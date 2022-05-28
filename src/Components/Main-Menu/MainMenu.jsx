import MenuItem from "./MenuItem";

const MainMenu = () => {
  const ItemList = [
    {
      image: "offers.png",
      title: "Top Offers",
    },
    {
      image: "mobile.png",
      title: "Mobiles",
    },
    {
      image: "grocery.png",
      title: "Grocery",
    },
    {
      image: "fashion.png",
      title: "fashion",
    },
    {
      image: "electronics.png",
      title: "Electronics",
    },
    {
      image: "home.jpg",
      title: "Home",
    },
    {
      image: "appliances.png",
      title: "Appliances",
    },
    {
      image: "travel.png",
      title: "Travel",
    },
    {
      image: "toy.png",
      title: "Toys & More",
    },
  ];
  const MenuList = ItemList.map((data, index) => {
    return (
      <>
        <MenuItem key={index} data={data} />
      </>
    );
  });
  return (
    <>
      <div className="main-menu">
        <div className="menu">{MenuList}</div>
      </div>
    </>
  );
};
export default MainMenu;
