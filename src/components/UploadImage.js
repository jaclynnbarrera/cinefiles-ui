import { useState } from "react";
import "./uploadImage.css";

function UploadImage() {
  const [formData, setFormData] = useState({
    title: "title",
    director: "director",
    dop: "DOP",
    actors: "actor",
    year: "2000",
    frame: "close-up",
    color: "blue",
    file: null,
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
        mode: "no-cors",
      });

      const result = response;
      console.log("Success:", result.body);
    } catch (error) {
      console.error("Error:", error);
    }

    // setFormData({ ...formData, file: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.file);
    try {
      const response = await fetch("http://localhost:5000/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.file),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
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
      </select>
      <label>image file:</label>
      <input type="file" name="file" onChange={handleFileUpload} />
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default UploadImage;
