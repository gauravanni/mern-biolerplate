const express=require('express');
const app=express();

app.get('/api/customers',(req,res)=>{
    const customers=[
        {id:1,name:'Gaurav',age:26},
        {id:2,name:'Alex',age:27},
        {id:3,name:'Adam',age:20}
    ];
    res.json(customers);
})

app.listen(5000,()=>{
    console.log('port started at 5000');
})