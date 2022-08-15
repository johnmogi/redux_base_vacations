const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.DB
});
connection.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("We're connected to Tourist on MySQL.");
});
function executeAsync(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
module.exports = {
  executeAsync
};
