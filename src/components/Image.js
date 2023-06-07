import "./image.css";

function Image(props) {
  return (
    <div className="image_wrapper">
      <img src={props.image} alt={props.title} />
      <p className="img_description">{props.title}</p>
    </div>
  );
}

export default Image;
