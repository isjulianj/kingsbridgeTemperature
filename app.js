var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var xhr = new XMLHttpRequest();

var serverFunction =
  'https://kingsbridgetemperature.azurewebsites.net/api/StoreTemperatureData?code=9HCPEi8fV5arG97GyyYfzOBaN7UzyYsWateAh5qOka55JFUZxrwmkQ==';

var tempTimeTaken = new Date();

var data = {
  temp: 90.3,
  sensor: 'dans willy',
  date: tempTimeTaken
};

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  } else {
    console.log(this.responseText);
  }
};
xhr.open('POST', serverFunction);
xhr.setRequestHeader('Content-type', 'application/JSON');
xhr.send(JSON.stringify(data));
