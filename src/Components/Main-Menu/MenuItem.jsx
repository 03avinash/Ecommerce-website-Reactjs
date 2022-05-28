const MenuItem = (props) => {
  console.log(props);
  const { image, title } = props.data;
  return (
    <div className="menu-item">
      <img src={image} alt="" width="64" />
      <p>{title}</p>
    </div>
  );
};
export default MenuItem;
