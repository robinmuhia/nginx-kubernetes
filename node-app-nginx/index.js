const express = require('express')
const os = require('os')
const fetch = require("node-fetch")

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    const message = `Hello from the ${os.hostname}`
    console.log(message)
    res.send(message)
})

app.get("/nginx",async (req,res)=>{
    const url = "http://nginx.com"
    const response = await fetch(url) 
    const body = await response.text()
    res.send(body)
})

app.listen(PORT,()=>{
    console.log(`Web server is listening on port ${PORT}`)
})