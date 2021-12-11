const express = require("express");
const cors = require("cors");
const blog = require("./routes/blog");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/blog", blog);

const Port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello  World");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
