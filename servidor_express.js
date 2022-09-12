const express = require('express')
const bodyParser = require('body-parser');
const { getEmployeById, setEmploye } = require('./data/employes_data');
const app = express()
const port = 3030


app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(req);
    console.log(res);
  res.send('Hello World! desde Express')
})

app.post('/perfil', (req, res) => {
    //Se puede hacer procesamiento....
    console.log(req.body.name);
    const { name } = req.body;
   
    res.json({
      status: 200,
      name
    });
});

app.get('/empleado', (req, res)=> {
  let {id} = req.body;
  console.log(req.body.id);
  let employe = getEmployeById(id);
  console.log(employe);
  res.json(employe);
});

app.post('/empleado', (req, res) => {
  const employe = req.body;
  console.log(employe);
  setEmploye(employe);
  res.json({
    status: 200,
    message: 'Employe saved'
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})