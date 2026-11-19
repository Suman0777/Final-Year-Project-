import express from "express";
import Report from "../util/db.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("The Report page");
});

routes.post("/report", (req, res) => {
  try {
    const { location, describtion, reporttype } = req.body;
    console.log(location, describtion, reporttype);
    
    const newReport = new Report({
      location,
      describtion,
      reporttype
    });
    
    newReport.save();
    res.status(200).send("mesaaage is recieve");
  } 
  catch (error) {
    console.log(error.message);
  }
});

export default routes;
