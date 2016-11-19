
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config={
    user: 'hari70a',
    database: 'hari70a',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}
var app = express();
app.use(morgan('combined'));
// // create the pool somewhere globally so its lifetime
// // lasts for as long as your app is running
// var pool = new Pool(config)
// app.get('/db-mine',function(req, res){
//   //make select request
//   //return aresponse with results
//   console.log(res)
//   pool.query('SELECT * FROM product', function(err,results) {
//     console.log(err,results)
//     if (err){
//         res.status(500).send(err.toString());
//     }else{
//         results.send(JSON.stringify(results))
//     }
//   });
// });
var articles={
'article_one' :{
    title:'Article-one | Hariraj',
    heading:'Article One',
    date:'Oct 9, 2016',
    content:`
        <p>
            This is the content for first article.
        </p>
        
    `
},
'article_two' :{
    title:'Article-two | Hariraj',
    heading:'Article two',
    date:'Oct 10, 2016',
    content:`
        <p>
            This is the content for two article.
        </p>
        
    `
},
'article_three' :{
    title:'Article-three | Hariraj',
    heading:'Article three',
    date:'Oct 11, 2016',
    content:`
        <p>
            This is the content for three article.
        </p>
        
    `
}
};
function createTemplate(data){
    var title=data.heading;
    var date= data.date;
    var content=data.content;
    var htmlTemplate =`
    <html>
        <head>
            <title>Article one | Hariraj </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ='container'>
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h2>
                    ${title}
                </h2>
                <div>
                     ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>    
        </body>
    </html>
    ` ;
    return htmlTemplate;
}
// create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
var pool = new Pool(config)
app.get('/test-db', function (req, res) {
  //make a select request
  //return a response with results
  pool.query('SELECT * FROM article',function(err,result){
    if(err){
      res.status(500).send(err.toString());
    }else{
      res.send(JSON.stringify(result.rows))
    }
  });
});
app.get('/submit_name', function (req, res) {
  console.log(req,"request");
  var name = req.query.name;
  names.push(name)
  res.send(JSON.stringify(names));
});

var counter =0;

app.get('/counter', function (req, res) {
  console.log(counter,"$$$$");
  counter=counter+1;
  res.send(counter.toString());
});


var names =[];


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// app.get('/:articleName', function (req, res) {
//   //articleName = article_one
//   //articles[articleName] = {}content obj for article-1
//   var articleName=req.params.articleName;
//   res.send(createTemplate(articles[articleName]));
// });

// app.get('/ui/main.js', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
// });

// app.get('/ui/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
// });

// app.get('/ui/madi.png', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
// });
// app.get('/favicon.ico', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
// });


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});