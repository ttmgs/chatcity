const express = require('exoress');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 5000;
const app = express();

app.usr(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function() {
  console.log('🌎 ==> server listening now on http://localhost:' + PORT);
});