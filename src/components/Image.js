import "./image.css";

function Image(props) {
  const { id, url, title, year } = props.image;
  return (
    <div className="image_wrapper">
      <img className="img" src={url} alt={title} />
      <div className="img_info_container">
        <p className="img_title">{title}</p>
        <p className="img_year">{year}</p>
      </div>
    </div>
  );
}

export default Image;
