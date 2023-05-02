const express = require('express');
const cors = require('cors');
const chefData = require('./chefData.json')
const app = express();
app.use(cors());

app.get('/', (req, res)=>{
   
})
app.get('/chefData', (req, res)=>{
    res.send(chefData)
})

app.listen(5000,() => { 
    console.log('server is running')
});