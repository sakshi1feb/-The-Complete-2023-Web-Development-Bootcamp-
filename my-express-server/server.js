const { log } = require("console");
const express =require("express");
const app =express();
app.get('/',function(reqest,response){
    response.send('<h1>hello its my backent processing...</h1>')
})
app.get('/contact',function(req,res){
    res.send('contact me at sakshi1feb@gmail.com');
});
app.get('/about',function(req,res){
    res.send('hi You are reading about an amazing person who loves to code and finds it intresting 😁')
})
app.listen(3000 ,function(){
    console.log('server has started on port 3000');
});
