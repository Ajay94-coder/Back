import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send(' world');

})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${port}`)
})