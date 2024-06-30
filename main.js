const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
var userRouter = require('./routes/userRouter');
app.use('/', userRouter);

var itemRouter = require('./routes/itemRouter');
app.use('/', itemRouter);

var orderRouter = require('./routes/orderRouter');
app.use('/', orderRouter);