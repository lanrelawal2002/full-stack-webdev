const mysql = require("mysql2/promise");

const lanPool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "bluegate",
});

module.exports = lanPool;
