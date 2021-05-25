const express = require("express");
const path = require("path");
const app = express()
const port =  80;

//Express Specific Stuff
app.use('/static',express.static('static'))//for serving static filers
app.use(express.urlencoded())
//app.use(express.writeFileSync())

//PUG specific stuff
app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the view directory

//endpoint
app.get('/',(req,res)=>{
    
    const param = {}
    res.status(200).render('index.pug',param)
});
//start the server
app.listen(port,()=>{
    console.log(`the app is startedsdss on port ${port}`)
})