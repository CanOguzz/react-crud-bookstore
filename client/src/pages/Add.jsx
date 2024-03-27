import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


// Define the Add component
const Add = () => {
  //Initialize the book state variable
  const [book, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  // Use the useNavigate hook from react-router-dom to programmatically navigate
  const navigate = useNavigate();
  
  // Define a function to handle changes in the input fields
  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Define a function to handle the click event of the Add button
  const handleClick = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    try {
      // Send a POST request to the server to add the book
      await axios.post("http://localhost:8800/books", book);
      // Navigate to the home page after the book is added
      navigate("/");
    } catch (err) {}
  };

  console.log(book);
  // Render the form for adding a book
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={handleChange}
      ></input>
      <input
        type="number"
        placeholder="price"
        name="price"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
