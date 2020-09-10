const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

// const dishRouter = require('./dishRouter');
// const leaderRouter = require('./leaderRouter');
// const promoRouter = require('./promoRouter');


// // app.use('/dishes', dishRouter);
// // app.use('/leadership', leaderRouter);
// // app.use('/promotions', promoRouter);


const app = express();

// app.set('view engine', 'hbs');

app.use(morgan('dev'));

app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req,res,next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});
 
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all dishes');
});

//  /dishes/:dishId

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});






















// // app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname+'/public'));

// // app.use('/dishes', dishRouter);
// // app.use('/leadership', leaderRouter);
// // app.use('/promotions', promoRouter);

// app.use((req, res, next) => {
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

app.listen(port, hostname, function(){
  console.log('Server running at http://'+hostname+':'+port);
});