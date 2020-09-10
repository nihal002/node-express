//  fisrt commit


const express = require('express');
const  http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});







// --------------------------------------------------------------


// var express = require('express');
// var path = require('path');
// var logger = require('morgan');
// var bodyParser = require('body-parser');

// var hostname = 'localhost';
// var port = 3000;

// var dishRouter = require('./dishRouter');
// var leaderRouter = require('./leaderRouter');
// var promoRouter = require('./promoRouter');

// var app = express();

// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/dishes', dishRouter);
// app.use('/leadership', leaderRouter);
// app.use('/promotions', promoRouter);

// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }


// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// app.listen(port, hostname, function(){
//   console.log('Server running at http://'+hostname+':'+port);
// });