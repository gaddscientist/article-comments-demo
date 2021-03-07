const express = require('express');
const path = require('path');
const db = require('./blog_db');
const app = express();
// const fs = require('fs');

// Parses incoming request object as a JSON object
app.use(express.json());

// Handles POST requests to add a comment
app.post('/article', async function(req, res) {
  // Gets chosen criteria into local variable
  const uname = req.body.uname,
    commentBody = req.body.commentBody,
    depth = req.body.depth,
    timestamp = req.body.timestamp;
  const parentId = req.body.parentId ? req.body.parentId : null;

  // Inserts new comment into database
  const affectedRows = await db.addComment(
    timestamp,
    uname,
    commentBody,
    depth,
    parentId
  );

  console.log(`${affectedRows} row(s) affected`);
  res.json(affectedRows);
});

// Handles GET request to retrieve all comments
app.get('/article', async function(req, res) {
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
