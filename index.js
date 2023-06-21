require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT

const route = require('./src/routes/routes')

const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views/docs')

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/src/public"))
app.use('/',route)

app.listen(port, ()=>{
    console.log('servidor funcionando en el puerto: ',port)
})