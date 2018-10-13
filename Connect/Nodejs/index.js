var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "system",
    password      : "GetStarted18c",
    connectString : "//localhost:1521/XEPDB1"
  },
  function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      "SELECT 'Hello World!' FROM dual",
      function(err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      });
  });

  function doRelease(connection) {
    connection.close(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  }
