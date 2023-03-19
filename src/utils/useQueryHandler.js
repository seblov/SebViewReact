const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const query = "SELECT name FROM sys.databases";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});

function useQueryHandler(query) {
  return new Promise((resolve, reject) => {
    sql.open(config, (err, conn) => {
      if (err) {
        reject(err);
      } else {
        conn.query(query, (error, results) => {
          conn.close();
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }
    });
  });
}

module.exports = { useQueryHandler };