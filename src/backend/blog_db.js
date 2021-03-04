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

// TESTING
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

async function addComment(
  timestamp,
  uname,
  commentBody,
  depth,
  parentId = null
) {
  const query = `INSERT INTO comments VALUES ( NULL, STR_TO_DATE('${timestamp}', '%d-%m-%Y %h:%i %p'), '${uname}', '${commentBody}', ${depth}, ${
    parentId ? parentId : 'NULL'
  } )`;

  const data = [timestamp, uname, commentBody, depth, parentId];
  const result = await executeQuery(query, data);
  return result.affectedRows;
}

async function getComments() {
  const query = 'SELECT * FROM comments';
  return await executeQuery(query);
}

// TESTING
(async () => {
  // const query = 'SELECT * FROM comments';
  // const stuff = await executeQuery(query);
  // console.log(stuff);
  // await addComment('07-10-2020 10:20 AM', 'elvingadd', 'TEST BODY', 0, null);
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

module.exports = { addComment, getComments };
