import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import Cors from "cors";
// import dotenv from "dotenv";
// dotenv.config();

const connection_url =
  "mongodb+srv://admin-anshuman:test123@cluster0.ultcx.mongodb.net/hostelDatabase?retryWrites=true&w=majority";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(Cors());



mongoose.connect(connection_url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

  app.use("/", routes);


   
app.get("/", (req, res) => {
  res.send("Happy Coding");
});

app.listen(port, function () {
    console.log("listening on localhost    :" + port);
  });