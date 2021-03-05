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

async function addComment(
  timestamp,
  uname,
  commentBody,
  depth,
  parentId = null
) {
  const query = `INSERT INTO comments VALUES ( NULL, STR_TO_DATE('${timestamp}', '%m/%d/%Y %h:%i %p'), '${uname}', '${commentBody}', ${depth}, ${
    parentId ? parentId : 'NULL'
  } )`;

  const data = [timestamp, uname, commentBody, depth, parentId];
  const result = await executeQuery(query, data);
  return result.affectedRows;
}

async function getRootComments() {
  const query = 'Select * FROM comments WHERE depth = 0';
  const results = await executeQuery(query);
  return await populateChildren(results);
}
async function getChildComments(parentId) {
  const query = `Select * FROM comments WHERE parent_id = ${parentId}`;
  return await executeQuery(query);
}

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

// TESTING
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

module.exports = { addComment, getRootComments };
