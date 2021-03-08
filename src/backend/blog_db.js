const mysql = require('mysql');
const creds = require('../../credentials.json');

// Connection details
const connection = mysql.createConnection(creds);

// Connect to database
connection.connect(function(err, columns) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

const executeQuery = (query, data = null) => {
  return new Promise((resolve, reject) => {
    connection.query(query, data, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

/* --------------
 * Comments Table
 * -------------- */

// Inserts a comment into the comments table
async function addComment(
  timestamp,
  username,
  commentBody,
  depth,
  parentId = null
) {
  const query = `INSERT INTO comments VALUES ( NULL, STR_TO_DATE('${timestamp}', '%m/%d/%Y %h:%i %p'), '${username}', '${commentBody}', ${depth}, ${
    parentId ? parentId : 'NULL'
  } )`;

  const data = [timestamp, username, commentBody, depth, parentId];
  const result = await executeQuery(query, data);
  return result.insertId;
}

// Gets all the comments at the root level
async function getRootComments() {
  const query = 'SELECT * FROM comments WHERE depth = 0';
  const results = await executeQuery(query);
  return await populateChildren(results);
}

// Recursively builds nested object of parent/child comments
async function populateChildren(parents) {
  const results = await Promise.all(
    parents.map(async parent => {
      let obj = {
        ...parent,
        children: await getChildComments(parent.post_id),
      };
      if (obj.children !== []) {
        obj.children = await populateChildren(obj.children);
      }
      return obj;
    })
  );
  return results;
}

// Gets the child comments for a given single comment
async function getChildComments(parentId) {
  const query = `SELECT * FROM comments WHERE parent_id = ${parentId}`;
  return await executeQuery(query);
}

/* --------------
 * Users Table
 * -------------- */

async function getUser(username) {
  const query = `SELECT * from users WHERE username = '${username}'`;
  return await executeQuery(query);
}

async function addNewUser(user) {
  const query = `INSERT INTO users VALUES ( NULL, '${user.username}', '${user.password}' )`;
  return await executeQuery(query);
}

/* --------
 * TESTING
 * -------- */
(async () => {
  // let results = await getRootComments();
  // results.forEach(result => console.log(result.children));
})();

// Handler to shut down database on interrupt
process.on('SIGINT', function() {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  console.log('Closing database connection...');

  connection.end(function(err) {
    if (err) {
      console.log(err);
    }
  });

  process.exit();
});

module.exports = { addComment, getRootComments, getUser, addNewUser };
