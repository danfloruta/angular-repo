const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your own secret key
const secretKey = 'your-secret-key';

// Mock user for authentication
const user = {
  id: 1,
  username: 'admin',
  password: '$2a$12$YIsX4rYQWYmLyDVSix5t9uLbi57PptltlvrMSUz8xR.jHW0AVs.9.' // password: "password"
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the user
  if (username === user.username && bcrypt.compareSync(password, user.password)) {
    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    // Return the token
    return res.json({ token });
  }

  // Authentication failed
  return res.status(401).json({ message: 'Authentication failed' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
