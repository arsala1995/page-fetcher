const args = process.argv;
args.slice(2);
const fs = require('fs');

const request = require('request');
request(args[2], (error, response, body) => {
  if (error) {
    return console.log(error);
  }
  else if((response && response.statusCode) === 200){ fs.writeFile(args[3], body, function (err) {
    if (err) {
      return console.log(err);
    }
    
    console.log("Downloaded and saved " + body.length + " bytes to " + args[3]);
  });

  }

 else{
   console.log("statusCode: " + response && response.statusCode)
 }
 
});