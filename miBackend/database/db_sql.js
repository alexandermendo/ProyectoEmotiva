var Connection = require("tedious").Connection;
const config = require("./configsql.json");
var Request = require("tedious").Request;
var exec = async (q, con) => {
  return new Promise((resolve, reject) => {
    try{
    var req = new Request(q, (err) => {
      if (err) console.log(err);
    });
    var rows = [];
    req.on("row", (cols) => {
      var row = {};
      cols.forEach((col) => {
        if (col.value !== null) row[col.metadata.colName] = col.value;
      });
      rows.push(row);
    });
    req.on("done", (rowCount, more) => {
      console.log(rowCount + " rows returned");
    });
    req.on("requestCompleted", (rowCount, more) => {
      con.close();
      resolve(rows);
    });
    con.execSql(req);
  }catch (e) {
    console.log("exec conecto a sql pero no consulto, el defecto es:");
    console.log(e);
  }
  });
};
var execSQL = async (q) => {
  try {
    return new Promise((resolve, reject) => {
      try {
        var con = new Connection(config);
        con.on("connect", async (err) => {
          if (err) console.log(err);
          resolve(await exec(q, con));
        });
        con.connect();
      } catch (e) {
        console.log("Error al conectar"+e)
      }
    });
  } catch (e) {
    console.log("execSQL no conecto, el defecto es:");
    console.log(e);
  }
};
module.exports = execSQL;