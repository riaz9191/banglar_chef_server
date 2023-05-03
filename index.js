const express = require('express');
const cors = require('cors');
const chefData = require('./chefData.json')
const port = process.env.PORT || 5000
const app = express();
app.use(cors());

app.get('/', (req, res)=>{
   
})
app.get('/chefData', (req, res)=>{
    res.send(chefData)
})
app.get('/chefData/:id',(req, res)=>{
    const id = req.params.id;
    console.log(id)
    const selected = news.find(n => n._id === id)
    res.send(selected)
})

app.listen(port,() => { 
    console.log('server is running')
});