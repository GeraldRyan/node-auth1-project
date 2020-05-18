const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const Users = require('../users/user-model.js')

router.post('/register',(req,res)=>{
  const credentials = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 8

  // turn password into hash 
  const hash = bcryptjs.hashSync(credentials.password, rounds)
  credentials.password = hash
  //save user to db
  Users.add(credentials).then(user=>{
    res.status(201).json({data:user})
  })
  .catch(err=>{ res.status(500).json(err)})

})

module.exports = router