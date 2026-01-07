const express = require("express");
const app = express();




//routes
app.use("/", require('./routes'));





//Server Port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})