
// import app from "./src/app.js";
import express from 'express'
const app = express()

app.get("/hello", (req, res) => {
    res.send('Hello, from backend');
  });

/* Server Start */
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));