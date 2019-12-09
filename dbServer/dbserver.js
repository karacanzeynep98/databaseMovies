//const fetch = require('cross-fetch');
const express = require('express')
const port = 3000
const app = express();
 
let mysql = require('mysql');
 
const cors = require('cors');
app.use(cors());
 
//https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'laskikrikak123',
  database: 'giraffe'
});
 
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
 
///getMovies?director=yoyo
app.get('/getMovies', function(req,res){
    console.log('hi');
    //title, popularity, vote_avg, original_language
    let title = req.query.title;
    let popularity = req.query.popularity;
    let vote_avg = req.query.vote_avg;
    let budget = req.query.budget;
    let original_language = req.query.original_language;
    let query = 'SELECT * FROM detailsTable WHERE '
    if (title !== undefined){
        query = query + 'title = \'' + title + '\';'
    }
    else if (popularity !== undefined){
        query = query + 'id in (SELECT id FROM votesTable WHERE popularity >= ' + popularity + ');'
    }
    else if (vote_avg !== undefined){
        query = query + 'id in (SELECT id FROM votesTable WHERE vote_average >= ' + vote_avg + ');'
    }
    else if (budget !== undefined){
        query = query + ' id in (SELECT id FROM budgetTable WHERE budget >= ' + budget + ');'
    }
    else if (original_language !== undefined){
        query = query + 'original_language = \'' + original_language + '\';'
    }
  //let query = 'SELECT * FROM supervisor WHERE PERSON = \'' + director + '\';'
  console.log(query);
    con.query(query, (err, result) => {
        if (err) {
            res.send("Failed");
        }
        console.log(result);
        res.send(result);
    });
})
 
//2
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

