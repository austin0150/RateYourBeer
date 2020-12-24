const {MongoClient} = require('mongodb');
var mongo = require('mongodb');

var mongoConfig = require("../mongoConfig.json");

const uri = mongoConfig.MongoURI;

exports.getReview = async function(id)
{
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();
    var result;
    var mongId = new mongo.ObjectID(id);
    var query = {_id:mongId};

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        result = await client.db(mongoConfig.DbName).collection("reviews").findOne(query);
        console.log(result);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return result;
    }
}

exports.searchReviews = async function(searchTerm, searchType)
{
    
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();
    var results = [];

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        var reviewList = await client.db(mongoConfig.DbName).collection("reviews").find( { $text: { $search: searchTerm } }).sort({ reviewDate: -1 });
        results = await reviewList.toArray();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return results;
    }
}

exports.getReviews = async function()
{
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();
    var results = [];
    

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        var reviewList = await client.db(mongoConfig.DbName).collection("reviews").find().sort({ reviewDate: -1 });
        results = await reviewList.toArray();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return results;
    }
}

exports.addReview = async function(reviewObj)
{
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();

    var result;

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        result = await client.db(mongoConfig.DbName).collection("reviews").insertOne(reviewObj);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return result;
    }
}

exports.addComment = async function(comment)
{
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();
    var result;
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        result = await client.db(mongoConfig.DbName).collection("comments").insertOne(comment);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return result;
    }
}

exports.getComments = async function(reviewId)
{
    const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    await client.connect();
    var results = [];
    
    var query = {reviewId:reviewId};

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        var commList = await client.db(mongoConfig.DbName).collection("comments").find(query).sort({ commentDate: -1 });
        results = await commList.toArray();
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        return results;
    }
}