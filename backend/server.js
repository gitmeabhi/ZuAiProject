const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "test"
})

app.get("/", (req, res) =>{
   const sql = "SELECT * FROM students"
   db.query(sql, (err, data) =>{
    if(err) return res.json(err)
    return res.json(data)
   })
})

app.listen(3001, () =>{
    console.log("running...")
})