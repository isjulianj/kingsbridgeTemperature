var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var sensor = require("ds18x20");
var sensorId = "28-00000a69fc4b";

var serverFunction =
  "https://kingsbridgetemperature.azurewebsites.net/api/StoreTemperatureData?code=9HCPEi8fV5arG97GyyYfzOBaN7UzyYsWateAh5qOka55JFUZxrwmkQ==";

var temperature;
var tempTimeTaken;
var data = {};

sensor.get(sensorId, function(err, temp) {
  if (err) {
    console.log(err);
    return;
  }

  tempTimeTaken = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  temperature = temp;

  data.temp = temp;
  data.sensor = sensorId;
  data.date = date;
});

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhr.open("POST", serverFunction);
xhr.setRequestHeader("Content-type", "application/JSON");
xhr.send(JSON.stringify(data));
