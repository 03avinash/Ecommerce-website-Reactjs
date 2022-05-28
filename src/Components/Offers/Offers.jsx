import OffersImg from "./OffersImg";

const Offers = () => {
  const offers = [
    {
      image: "under699.jpg",
      style: "padding: 0 4px",
    },
    {
      image: "under99.jpg",
      style: "padding: 0 4px",
    },
    {
      image: "under799.jpg",
      style: "padding: 0 4px",
    },
    {
      image: "under999.jpg",
      style: "padding: 0 4px",
    },
  ];

  const offerlList = offers.map((data, index) => {
    return (
      <>
        <OffersImg key={index} data={data} />
      </>
    );
  });

  return (
    <>
      <div className="offers">{offerlList}</div>
    </>
  );
};
export default Offers;
