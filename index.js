const express = require('express');

const app = express();

var publicDir = require('path').join(__dirname,'/');
app.use(express.static(publicDir));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(process.env.PORT||3000, () => console.log(`server listening on port 3000!`))