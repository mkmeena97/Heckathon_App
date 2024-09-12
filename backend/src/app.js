import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {hellorouter} from './routes/allroutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Middleware
app.use(cors()); // Add CORS middleware if you need to allow cross-origin requests

//Health check route
app.use("/health", (req, res) => {
  res.status(200).send('OK');
});

// Use the hellorouter for /helloroute prefix
app.use("/helloroute", hellorouter);

export default app;
