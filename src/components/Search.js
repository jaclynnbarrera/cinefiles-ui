import React, { useState } from "react";
import "./search.css";

function Search() {
  const [input, setInput] = useState("");

  const search = () => {
    console.log("in search function");
    //
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");

    search();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="search"
          name="q"
          placeholder="search by title..."
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
