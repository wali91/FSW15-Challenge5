const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const morgan = require('morgan')
const port = 5000;


//middleware built in//
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use(morgan('tiny'))
//route
app.use(require('./routes/route'));

app.get('/home', (req, res) => {
    res.json({ message: 'hello' })
})


// Static Files
app.use(express.static('public'));
// Example for other olders
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
