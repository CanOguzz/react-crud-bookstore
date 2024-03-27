import express, { json } from 'express';
import mysql from 'mysql'
import cors from 'cors';
// Log a message to the console when the server starts running
const app = express();
// Create a connection to the MySQL database
const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"admin",
database:"test1"
})

// Middleware to parse JSON bodies from HTTP requests
app.use(express.json());
// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Define a GET route for the root path
app.get('/', (req, res) => {
    res.json(   "this is backend "  );
})
// Define a GET route to fetch all books
app.get('/books', (req, res) => {
    const q="SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
        
});
// Define a POST route to add a new book
app.post('/books', (req, res) => {
    const q="INSERT INTO books (`title`, `desc`,`price`,`cover`) VALUES (?)";
    const values=
    [req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("book hass been added successfully");
    })
});
// Define a DELETE route to delete a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;

    const q="DELETE FROM books WHERE id=?";
    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("book hass been deleted successfully");
    })
});

// Start the server on port 8800
app.listen(8800, () => {
    console.log('Backend server is running!');
  });
// Define a PUT route to update a book by ID
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });