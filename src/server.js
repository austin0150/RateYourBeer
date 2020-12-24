var express = require('express');
var app = express();
var mongo = require('./scripts/mongo_actions');
var bodyParser = require('body-parser');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded


app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.post('/beer_feed', async function(req,res){

    console.log(req.body);
    var reviews = await mongo.searchReviews(req.body.beerSearch, req.body.searchType);
    res.render('pages/beer_feed', {
    reviews : reviews
    });
});

//beer feed page
app.get('/beer_feed', async function(req,res){

    var reviews = await mongo.getReviews();

    res.render('pages/beer_feed', {
    reviews : reviews
    });
});

//review added
app.post('/review_added', async function(req,res){


    console.log(req.body);
    var date = new Date();
    req.body.reviewDate = date;
    
    var result = mongo.addReview(req.body);

    res.render('pages/review_added');
    
});

//See full beer info
app.get('/view_beer', async function (req,res){
    var id = req.query['id'];
    var doc = await mongo.getReview(id)

    var comms = await mongo.getComments(id);

    res.render('pages/view_beer',{
        review : doc,
        comments : comms
    });

})

//render view after comment added
app.post('/view_beer',async function(req,res){

    var date = new Date();
    req.body.commentDate = date;

    mongo.addComment(req.body);

    var doc = await mongo.getReview(req.body.reviewId);
    var comms = await mongo.getComments(req.body.reviewId);
    res.render('pages/view_beer',{
        review : doc,
        comments : comms
    });

})

//Write Review
app.get('/create_review', async function(req,res){

      res.render('pages/create_review');
});

//Write Comment
app.post('/create_comment', async function(req,res){
    var id = req.body.reviewId;

    res.render('pages/create_comment',{
        reviewId : id
    });
})

app.listen(8080);
console.log('Node Server running on 8080');