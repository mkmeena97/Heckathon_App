import { createServer } from 'http';
import app from './src/app.js'; // Import app from app.js

const PORT = process.env.PORT || 8080;
const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
