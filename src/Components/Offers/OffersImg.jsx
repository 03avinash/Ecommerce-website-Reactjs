const OffersImg = (props) => {
  const { image, style } = props.data;
  return (
    <>
      <img style={{ style }} width="355" src={image} alt="" />
    </>
  );
};
export default OffersImg;
