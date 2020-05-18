const express = require("express")
const helmet = require("helmet")

const db = require("./data/dbconfig.js")

const server = express()

server.use(helmet())
server.use(express.json())

server.get("/",(req,res)=>{
  res.status(201).json("server running")
})

module.exports = server