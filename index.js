const express = require('express')
const connectDB= require('./config/database')
const router = require('./config/routes')
const cors= require('cors')
const app= express()
const port =process.env.PORT || 3015 //step 1
const path = require('path')
app.use(express.json())

connectDB() 
//
app.use(cors())
app.use(express.json())
app.use('/',router)
 // step 3
if( process.env.NODE_ENV === "production"){
    app.use(express.static( 'client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html')) //relative path
    })
}
app.listen(port,()=>{
    console.log('listenig on port', port)
})
