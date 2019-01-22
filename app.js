var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var mysql = require("mysql");

var xhr = new XMLHttpRequest();

var tempTimeTaken = new Date();

var con = mysql.createConnection({
  host: "db770327330.hosting-data.io",
  user: "dbo770327330",
  password: "",
  database: "db770327330",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var data = {
  temp: 90.3,
  sensor: "dans willy",
  date: tempTimeTaken
};

// xhr.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.responseText);
//   }
// };
// xhr.open("POST", serverFunction);
// xhr.setRequestHeader("Content-type", "application/JSON");
// xhr.send(JSON.stringify(data));
