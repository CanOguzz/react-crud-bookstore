import express, { json } from 'express';
import mysql from 'mysql'

const app = express();

const dp=mysql.createConnection({
host:"localhost",
user:"root",
password:"admin",
database:"test1"
})

app.get('/', (req, res) => {
    res.json(   "this is backend "  );
})

app.get('/books', (req, res) => {
    const q="SELECT * FROM books";
    dp.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
        
});


app.listen(8800, () => {
    console.log('Backend server is running!');
  });