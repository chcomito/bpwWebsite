let express = require("express");
let app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));




app.listen(1234, async ()=> {
    //start and wait for the DB connection
    try{
		await mongoose.connect('mongodb://127.0.0.1:27017/chooseYourAdventure', {useNewUrlParser: true, useUnifiedTopology: true });
    } catch (e){
        console.log(e.message);
    }

    console.log("Server is running...");
});

app.get('/', function(req, res){
    res.render('index');
})

app.get('/contact', function(req, res){
    res.render('contact');
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/index', function(req, res){
    res.render('index');
})