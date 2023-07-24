const express = require('express');
const bodyParser=require('body-parser')
const app =express()
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.post('/' , function(req,res){
    let result =Number(req.body.num1) +Number(req.body.num2)
    res.send(`The sum of the two numbers is ${result}`)
})


app.get('/bmicalculator',function(req,res){
        res.sendFile(__dirname+'/bmiCalculator.html')
})
app.post('/bmicalculator',function(req,res){
    let weight = Number(req.body.weight);
    let height =Number(req.body.height);
    let bmi=weight/(height**2);
    res.send(`Your BMI is ${bmi} `);
})
app.listen(3000, function(){
    console.log('server has started on port 3000')
})
