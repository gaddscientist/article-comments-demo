const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const db = require('./blog_db');
const credentials = require('../../credentials.json');
const app = express();

// Parses incoming request object as a JSON object
app.use(express.json());

/**
 * Authentication Requests
 */

// Handles login requests
app.post('/login', async (req, res) => {
  const username = req.body.username;

  // Get user data from DB
  let user = await db.getUser(username);
  // Query returns an array of objects and this gets the first(only) one
  user.length !== 1
    ? res.json({ message: 'ERROR: User not found' })
    : (user = user[0]);

  // Validate login info
  try {
    // returns false if password incorrect
    return (await bcrypt.compare(req.body.password, user.password))
      ? res.json({ message: 'Success' })
      : res.json({ message: 'Password incorrect' });
  } catch {
    // Server error
    return res.json({ message: 'Server error' });
  }
});

// Handles sign up requests
app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };

    // Create user in DB
    const results = await db.addNewUser(user);

    if (results.affectedRows === 1) {
      res.json({ message: 'Success' });
    } else {
      res.json({ message: 'ERROR: User not added' });
    }
  } catch {
    res.json({ message: 'Server error' });
  }
});

/**
 * Comment Requests
 */

// Handles POST requests to add a comment
app.post('/article', async (req, res) => {
  // Gets chosen criteria into local variable
  const uname = req.body.uname,
    commentBody = req.body.commentBody,
    depth = req.body.depth,
    timestamp = req.body.timestamp;
  const parentId = req.body.parentId ? req.body.parentId : null;

  // Inserts new comment into database
  const newId = await db.addComment(
    timestamp,
    uname,
    commentBody,
    depth,
    parentId
  );

  console.log(`New post added with id: ${newId}`);
  res.json(newId);
});

// Handles GET request to retrieve all comments
app.get('/article', async (req, res) => {
  const comments = await db.getRootComments();
  // fs.writeFileSync('comments.json', JSON.stringify(comments, null, 4));
  res.json(comments);
});

// src folder is two folders above server.js file, and in the static dist folder
const rootDir = path.join(__dirname, '..', '..', '/dist/');

// Default handler
app.use(express.static(path.join(rootDir)));

// Listen for any incoming requests
app.listen(5000);

console.log('Node.js web server at port 5000 is running...');
