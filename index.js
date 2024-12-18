
const express = require('express')
const app = express();
var users= [
    {
        name:"Sourav",
        kidneys:[{
            healthy :false
        }]
    }
];
app.get("/",function (req,res)
{ 
    const  johnKidney= users[0].kidneys;
    console.log(johnKidney) 

}
)
app.listen(3000)