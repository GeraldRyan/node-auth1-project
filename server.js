const express = require("express")
const helmet = require("helmet")
const userRouter = require('./users/user-router.js')
const authRouter = require('./auth/router.js')

const db = require("./data/dbconfig.js")

const server = express()

server.use(helmet())
server.use(express.json())

server.get("/",(req,res)=>{
  res.status(201).json("server running")
})

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)


module.exports = server