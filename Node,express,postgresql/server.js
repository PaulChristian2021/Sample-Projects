const express = require("express");

const studentRoutes = require('./src/student/routes');


const app = express();
const port = 3334;

app.use(express.json())


app.get('/', (req,res)=>{
  res.send('Hey there.')
})

app.use('/api/v1/students', studentRoutes)

app.listen(port, () => {
  console.log("------Running: " + port + '------');
});
