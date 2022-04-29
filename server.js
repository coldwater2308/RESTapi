const express = require("express"); 
const dotenv = require('dotenv'); 

const app = express(); 
const bookRoutes= require('./routes/bookRoutes')

dotenv.config(); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/books',bookRoutes);
const PORT = process.env.PORT||5000;
app.listen(PORT , console.log("Server Running on Port 5000"));