var oracledb = require('oracledb');

oracledb.getConnection(
  {
    user          : "system", // {username}
    password      : "GetStarted18c", // {password}
    connectString : "//localhost:1521/XEPDB1" //{hostname}:{port}/{DB name}
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
