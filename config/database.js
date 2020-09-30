const mongoose = require('mongoose')
const connectDB=()=>{
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/july-science-project', 
{ useNewUrlParser: true,
    useUnifiedTopology: true}) //step 2
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})
}
module.exports = connectDB