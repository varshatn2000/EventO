const express = require('express')
const app = express()
app.use(express.json());
const port = 3000;

// mongodb connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/share-events-app");
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})

const usr = require('./routes/Register');
app.use(usr);
const evnt = require('./routes/Organize');
app.use(evnt);
const info = require('./routes/Collaborate');
app.use(info);

// app.get('/', (req, res) => {
//   res.send('/')
// })

app.listen(process.env.port || port, () => {
  console.log(`Server listening on port ${port}`)
})