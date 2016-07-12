// api key nasa
// zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk


//https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk
var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var masterRoutes = require('./server/masterRoutes')
var UserController = require('./controllers/UserController')

var app = express();
var port= 8010;
const mongoUri= `mongoUri://localhost:27017`;

mongoose.connect(mongoUri);
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at ` + mongoUri)
})

app.use(bodyParser.json());

// endpoints user
app.post('user', UserController.create);
app.put('user', UserController.update);
app.delete('user', UserController.delete);




app.listen(port, function(){
  console.log('Express listening on '+ port)
})
