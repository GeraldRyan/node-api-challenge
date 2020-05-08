const express = require('express')
const server = express()

const actionRouter = require("./routers/actionRouter")
const projectRouter = require("./routers/projectRouter")

server.get('/', (req, res)=>{
  es.status(200).json({message:"Server is running"})
})

module.exports = server