import { useState } from "react";
import "./uploadImage.css";

function UploadImage() {
  const [formData, setFormData] = useState({
    description: "description",
    color: "blue",
    frame: "close-up",
    url: "",
    title: "title",
    director: "director",
    dop: "DOP",
    actors: "",
    year: "2000",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    try {
      const response = await fetch("http://localhost:5000/uploadImage", {
        method: "POST",
        body: data,
      });

      const image = await response.json();
      setFormData({ ...formData, url: image.url });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>director:</label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
        <label>DOP:</label>
        <input
          type="text"
          name="dop"
          value={formData.dop}
          onChange={handleChange}
        />
        <label>actors:</label>
        <input
          type="text"
          name="actors"
          value={formData.actors}
          onChange={handleChange}
        />
        <label>year:</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <label>frame:</label>
        <select name="frame" value={formData.frame} onChange={handleChange}>
          <option value="long">long shot</option>
          <option value="close">close-up</option>
          <option value="medium">medium shot</option>
          <option value="pov">POV</option>
          <option value="pov">establishing shot</option>
          <option value="title">title card</option>
        </select>
        <label>color:</label>
        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="purple">purple</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="bw">black and white</option>
          <option value="neutral">neutral</option>
        </select>
        <label>image file:</label>
        <input type="file" name="file" onChange={handleFileUpload} />
        <label>write a short description:</label>
        <textarea
          rows="5"
          cols="33"
          value={formData.description}
          onChange={handleChange}
          name="description"
        ></textarea>
        <button type="submit">Upload Image</button>
      </form>
    </>
  );
}

export default UploadImage;
