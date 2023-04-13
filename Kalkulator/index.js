const express = require("express");
const app = express();
const path = require('path');
const ejs = require("ejs")

var htmlPath = path.join(__dirname, 'views');
app.use(express.static(htmlPath));
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile);

app.get("/", async function (req, res) {
    res.render("index.html")
})

var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log('listening on http://' + host + ':' + port + '/');
});