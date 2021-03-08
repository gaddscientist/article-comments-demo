const express = require('express');
const path = require('path');
const db = require('./blog_db');
const app = express();
// const fs = require('fs');

// Parses incoming request object as a JSON object
app.use(express.json());

/**
 * Authentication Requests
 */

// Handles login requests
app.post('/login', async (req, res) => {
  // Get user data from DB
  // Validate login info
  // Return jwt key if validated or error if not
});

// Handles sign up requests
app.post('/signup', async (req, res) => {
  // Create user in DB
  // Return jwt key
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
