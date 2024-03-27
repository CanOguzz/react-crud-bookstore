import React from "react";
import { useState } from "react";

import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
// Define the Update component
const Update = () => {
  const [book, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();
  
  // Get the location object from the useLocation hook
  const location = useLocation();
  
  // Extract the bookId from the URL
  const bookId = location.pathname.split("/")[2];
  
  // Define the handleChange function to update the book state
  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
// Define the handleClick function to send the update request
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to the server to update the book
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
      // Navigate back to the home page after the update
    } catch (err) {}
  };
  console.log(book);
   // Render the form to update the book info
  return (
    <div className="form">
      <h1>Update book info</h1>
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
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
