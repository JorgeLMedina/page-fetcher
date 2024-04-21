const args = process.argv;
const fs = require('fs');
// console.log(args.splice(2));
const request = require("request");

request(args[2], (error, response, body) => {
  if (error) console.log("error:", error);
  fs.writeFile(args[3], body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${args[3]}`);
    }
  });
});
