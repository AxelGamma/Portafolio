const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path')

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, './views'))

const routes = require('./routes/index.routes')

app.use(require('./routes/index.routes'))
app.use(express.static(path.join(__dirname, '../public')))
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
app.listen(3000, () => {
    console.log("Servidor a la espera de conexiones")
})

//CfTK08vOWBn7lXQq
//mongodb+srv://cericlop:<password>@cluster0.xeov8me.mongodb.net/?retryWrites=true&w=majority
//cericlop