import express from 'express';
import mysql from 'mysql'

const app = express();

const dp=mysql.createConnection({
host:"localhost",
user:"root",
password:"admin",
database:"test1"
})

app.listen(8800, () => {
    console.log('Backend server is running!');
  });