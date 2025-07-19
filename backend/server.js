// require('dotenv').config();
// const app = require('./src/app');

// app.listen(process.env.PORT || 3000, () => {
//     console.log('Server is running on http://localhost:3000')
// });

// server.js
require('dotenv').config();
const app = require('./src/app');

// Define the port from environment variables, defaulting to 3000 for local development
const PORT = process.env.PORT || 3000;
// Crucial: Bind to 0.0.0.0 for Render deployment
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    // Log the actual host and port your server is listening on
    console.log(`Server is running on http://${HOST}:${PORT}`);
});