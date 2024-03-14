import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
e.preventDefault()
try{
  await axios.post("http://localhost:8800/books",book);
  navigate("/");
}catch(err){
  };
  };
  console.log(book);
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" placeholder="title" name="title" onChange={handleChange}></input>
      <input type="text" placeholder="desc" name="desc" onChange={handleChange}></input>
      <input type="number" placeholder="price" name="price" onChange={handleChange}></input>
      <input type="text" placeholder="cover" name="cover" onChange={handleChange}></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
