const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoteRouter = require('./routes/promoteRouter');



const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/leadership', leaderRouter);
app.use('/promotions', promoteRouter);

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1> express server </h1></body></html>')
});

const server = http.createServer(app);

app.listen(port, hostname, function(){
  console.log('Server running at http://'+hostname+':'+port);
});