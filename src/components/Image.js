import "./image.css";

function Image(props) {
  const { id, url, title, year } = props.image;

  const handleClick = () => {
    console.log(props.image);
  };
  return (
    <div className="image_wrapper" onClick={handleClick}>
      <img className="img" src={url} alt={title} />
      <div className="img_info_container">
        <p className="img_title">{title}</p>
        <p className="img_year">{year}</p>
      </div>
    </div>
  );
}

export default Image;
