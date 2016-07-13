// api key nasa
// zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk


//https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk
var express= require ('express');
var bodyParser= require('body-parser')
var mongoose= require('mongoose');
var UserController = require('./controllers/UserController')

var app = express();
var port= 8010;
const mongoURI= `mongodb://localhost:27017`;

app.use( express.static(`${__dirname}/../Public`) );

mongoose.connect(mongoURI);
mongoose.connection.once(`open`,function(){
  console.log(`Connected to mongo at: `, mongoURI)
})

app.use(bodyParser.json());

// endpoints user
app.post('/api/user', UserController.create);
app.put('/api/user', UserController.update);
app.delete('/api/user', UserController.delete);




app.listen(port, function(){
  console.log('Express listening on '+ port)
})
