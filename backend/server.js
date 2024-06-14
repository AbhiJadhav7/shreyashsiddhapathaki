// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, contact } = req.body;

  // Store data logic here
  console.log({ name, email, contact });

  // Send a response back to the client including the received data
  res.status(200).json({ 
    message: 'Form data received successfully',
    name,
    email,
    contact
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
