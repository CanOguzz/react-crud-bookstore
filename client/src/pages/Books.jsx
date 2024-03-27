import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Define the Books component
const Books = () => {
  //Initialize the books state variable
  const [books, setBooks] = useState([])
  // Define a useEffect hook to fetch all books when the component mounts
  useEffect(() => {
  const fetchAllBooks = async () => {
    try{
       // Send a GET request to the server to fetch all books
      const res = await axios.get("http://localhost:8800/books");
      console.log(res);
      setBooks(res.data);
    }catch(err){
      console.error(err.message);
    }
  }
   // Call the fetchAllBooks function
     fetchAllBooks();
  }, []);
// Define a function to handle deleting a book
const handleDelete = async (id) => {
  try{
     // Send a DELETE request to the server to delete the book
     await axios.delete(`http://localhost:8800/books/${id}`);
    // Reload the page after the book is deleted
    window.location.reload();
  }catch(err){
    console.error(err.message);
  }
}
// Render the books
  return <div>
    <h1>MCO Book Shop</h1>
    <div className="books">
      {books.map(book=>(
        <div className="book" key={book.id}>
          {book.cover && <img src={book.cover} alt={book.title}/>}
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>{book.price}</span>
          <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
          <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
      ))}
      </div>
      <button><Link to="/add">Add new Book</Link></button>
  </div>;
};

export default Books;
