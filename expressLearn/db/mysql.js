const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql123",
  database: "expressApi",
});

class Mysql {
  constructor() {}
  query(sql) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
          throw err; //  连接失败
        }
        connection.query(sql, (error, results, fields) => {
          if (error) {
            reject(err);
            throw error;
          }
          // 只是释放连接在缓冲池，没有销毁
          connection.release();
          resolve(results);
        });
      });
    });
  }
}

module.exports = new Mysql();
