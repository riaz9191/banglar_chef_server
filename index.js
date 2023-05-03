const express = require('express');
const cors = require('cors');
const chefData = require('./chefData.json')
const recipe = require('./recipe.json')
const port = process.env.PORT || 7000
const app = express();
app.use(cors());

app.get('/', (req, res)=>{
    res.send('dragon is running')
})
app.get('/chefData', (req, res)=>{
    res.send(chefData)
    console.log(chefData)
})
app.get('/recipe', (req, res)=>{
    res.send(recipe)
    console.log(recipe)
})
app.get('/chefData/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedData = chefData.find(n => n.id == id)
    console.log(selectedData)
    res.send(selectedData)
})

app.listen(port,() => { 
    console.log('server is running')
});