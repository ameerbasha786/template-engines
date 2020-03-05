var express = require('express'),
    ejs = require('ejs');
var cors = require('cors');
var path=require('path');
var template = express();

template.use(cors())
template.set("view engine", 'ejs');
//template.use(express.static(__dirname ,'/public/getvalue.js'))
template.use(express.static(path.join(__dirname,'/public/getvalue.js'))) 
var data = { users: ["basha", "chenna", "harsha", "murali"] }
template.get('/', (req, res) => {

    res.render('display', { data: data })
})


template.listen(3000)


module.exports = template