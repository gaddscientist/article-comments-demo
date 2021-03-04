const express = require('express');
const path = require('path');
const db = require('./blog_db');
const app = express();

// Parses data sent from front end
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handles POST requests to add a comment
app.post('/article', async function(req, res) {
  // Gets chosen criteria into local variable
  const uname = req.body.uname,
    commentBody = req.body.commentBody,
    depth = req.body.depth,
    timestamp = req.body.timestamp;
  const parentId = req.body.parentId ? req.body.parentId : null;

  // TESTING
  // const timestamp = '07-10-2020 10:20 AM',
  //   uname = 'elvingadd',
  //   commentBody = 'TEST BODY',
  //   depth = 0,
  //   parentId = null;

  // Inserts new comment into database
  const result = await db.addComment(
    timestamp,
    uname,
    commentBody,
    depth,
    parentId
  );

  console.log(`${result} rows affected`);
});

// src folder is one folder above server.js file
const rootDir = path.join(__dirname, '..', '..');

// Default handler
app.use(express.static(path.join(rootDir, '/dist/')));

// Listen for any incoming requests
app.listen(5000);

console.log('Node.js web server at port 5000 is running...');
