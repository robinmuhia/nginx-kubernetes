const express = require('express')
const os = require('os')

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    const message = `Version 2: Hello from the ${os.hostname}`
    console.log(message)
    res.send(message)
})

app.listen(PORT,()=>{
    console.log(`Web server is listening on port ${PORT}`)
})