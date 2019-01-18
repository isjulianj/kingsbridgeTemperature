var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var xhr = new XMLHttpRequest();

var serverFunction =
  'https://kingsbridgetemp.azurewebsites.net/api/HttpTrigger1?code=KfPpR4uOu3aTmIGXeyWzOniSE/Bicz712bGSvK0NkN/6MZW3vbMAkA==';

var tempTimeTaken = new Date();

var data = {
  temp: 90.3,
  sensor: 'dans willy',
  date: tempTimeTaken
};

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhr.open('POST', serverFunction);
xhr.setRequestHeader('Content-type', 'application/JSON');
xhr.send(JSON.stringify(data));
