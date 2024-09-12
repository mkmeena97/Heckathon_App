
import { createServer } from "http";
import app from "./src/app.js";
import initSocket from "./src/config.js"; 

const server = createServer(app);

/* Socket Config */
initSocket(server);

/* Server Start */
const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));