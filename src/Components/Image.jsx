const Img = (props) => {
  return (
    <img src={`img/${props.src}.${props.format}`} alt={`${props.alt}`}></img>
  );
};

export default Img;
