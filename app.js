var express                 = require("express"),
    ejs                     = require("ejs")


// EXPRESS SETUP
var app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');

//ROUTES

app.get("/", function(req, res) {
    res.redirect("/rostos")
})

app.get("/rostos", function(req, res) {
    res.render('pages/rostos')
})

app.get("/paisagens", function(req, res) {
    res.render('pages/paisagens')
})

app.get("/exposicoes", function(req, res) {
    res.render('/exposicoes')
})


app.get("/sobre", function(req, res) {
    res.render('pages/sobre')
})

// LISTEN PORT SETUP
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started")
})