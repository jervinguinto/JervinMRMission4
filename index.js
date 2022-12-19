"use strict";
const calculatedCarValue = require("./CarValue");

const express = require("express");
const server = express();
server.use(express.json());
const env = require("dotenv")
env.config()
const PORT = process.env.PORT || 4002


server.listen(PORT, () => {
  console.log("listening to port", PORT);
});

server.get("/", (req,res) => {
  res.send("this is working");
});

// function carValue(req, res) {
//   let carModel;
//   let carYear;
//   let carValue;
//   ({ carModel, carYear } = req.body);

//   carValue = calculatedCarValue(carModel, carYear);
//   res.json(carValue);
// }

// server.post("/carValue",carValue);


server.post("/carValue",(req, res) =>{
  let carModel;
  let carYear;
  let carValue;
  ({ carModel, carYear } = req.body);

  res.json(calculatedCarValue(carModel, carYear));
  
}

)
