var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
    title:'Article-one | Hariraj',
    heading:'Article One',
    date:'Oct 9, 2016',
    content:`
        <p>
            This is the content for first article.This is the content for first article.This is the content for first article.This is the content for first article.This is the content for first article.
        </p>
        
    `
};
function createTemplate(data){
    var title=data.title;
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
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article_one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article_two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article_three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
