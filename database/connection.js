const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  host: `localhost`,
  user: `student`,
  password: `student`,
  database: `gallery`
})

module.exports.db.queryAsync = (QUERY) => {
  return new Promise((resolve, reject) => {
    module.exports.db.query(QUERY, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
};