import router from "../routes";
const runDB = require("./connection");


// Add a new document to the collection
// router.post("/", async (req, res) => {
//     console.log("inside post req")
//     let collection = await runDB.collection("posts");
//     let newDocument = JSON.parse(req.body);
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(201);
//   });