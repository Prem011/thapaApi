//express server connection
require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connect");

const PORT = process.env.PORT || 5000;

//getting all the routes

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("hi, i m live")
});

//middleware
app.use("/api/products", products_routes);

const start = async () =>{
    try{
        await connectDb(process.env.MONGODB_URL);
      app.listen(PORT, () => {
        console.log( `Server is running on port ${PORT}`);
      })
    }
    catch(err){
        console.log(err);
    }
}
start()


//express server connection end