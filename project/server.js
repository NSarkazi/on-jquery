var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs')
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendet: true}));

app.get('/List', (req, res) => {
    var Lists = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    res.send(Lists);
});

app.get('/', (req, res) => {
    res.send('API WORKS')
})

app.get('/List', (req, res) => {
    res.send(List);
})


app.post('/List', (req, res) => {
    var List = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    var maxId = List.length === 0 ? 0 : Math.max(...List.map(List => +List.id));
    console.log('1', req );
    List.push({
      id: maxId + 1,
      name:req.body.name,
      surname:req.body.surname,
      company:req.body.company

    })
  
    console.log('2', List);
    fs.writeFileSync('users.json', JSON.stringify(List, null, 2));
    res.send(List);
  })
 
  app.put('/List/:id', (req, res) => {
    var List = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    const result = List.filter(List => List.id !== +req.params.id);
    const item = List.find(List => List.id === +req.params.id);
    result.push({
      id: item.id,
      name: req.body.name,
      surname:req.body.surname,
      company:req.body.company
    });
   
    fs.writeFileSync('users.json', JSON.stringify(result, null, 2));
    res.send(result)
  
    
  })
  
  
  app.delete('/List/:id', (req, res) => {
    var List = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    const result = List.filter(List => List.id !== +req.params.id);
    fs.writeFileSync('users.json', JSON.stringify(result, null, 2));
    res.send(result)
  
    
  })


app.listen(3012, () => {

    console.log('--Node server started--');
})
