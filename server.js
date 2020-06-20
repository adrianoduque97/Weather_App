if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}

const OPEN_API_KEY = process.env.OPEN_API_KEY
const express = require("express")
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req,res)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&units=metric&appid=${OPEN_API_KEY}`
    console.log(req.body)
    axios(url).then(data=> res.json(data.data)).//res.send(data)).
    catch(err=>console.log(err))
    
    

})

app.listen(3000,()=> console.log("Server Started"))