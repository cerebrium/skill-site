const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts)

app.get(`/`, function(req, res) {
    res.render(`./index`)
});

app.get(`/contact`, function(req, res) {
    res.render(`./contact`, contactInfo = {
                            name: 'Nicholas Shankland',
                            age: 26,
                            email: 'nicholas.m.shankland@gmail.com'})
}) 

app.get(`/skill`, function(req, res) {
    res.render(`./skill`, myArray = ['fishing','biking' ,'playing', 'eating', 'flying'])
});

app.listen(3003, function(req, res) {
    console.log('Server is running')
})