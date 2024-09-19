const express= require("express")
const bodyParser= require("body-parser")
const cors= require("cors")
const plagarismRouter = require("./routes/plagarism.js")
const app = express()


app.listen(5050, ()=>
{
    console.log("Server is listening at port 5050")
})

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use('/plagarism', plagarismRouter)