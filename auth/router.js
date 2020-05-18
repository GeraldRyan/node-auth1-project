const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const Users = require('../users/user-model.js')
const { isValid } = require('../users/user-service')

router.post('/register', (req, res) =>
{
  const credentials = req.body

  if (isValid(credentials))
  {
    const rounds = process.env.BCRYPT_ROUNDS || 8

    // turn password into hash 
    const hash = bcryptjs.hashSync(credentials.password, rounds)
    credentials.password = hash
    //save user to db
    Users.add(credentials).then(user =>
    {
      res.status(201).json({ data: user })
    })
      .catch(err => { res.status(500).json({message: err}) })

  }
  else
  {
    res.status(400).json({ message: "Please provide username and password" })
  }
})

router.post('/login', (req, res) =>
{
  const { username, password } = req.body

  if (isValid(req.body))
  {


    Users.findBy({ username: username }).then(([user]) =>
    {
      if (user && bcryptjs.compareSync(password, user.password))
      {
        res.status(200).json("Welcome")
      }
      else
      {
        res.status(401).json({ message: "invalid credentials" })
      }
    }).catch(err =>
    {
      res.status(500).json({ message: err.message})
    })
      // turn password into hash 
      //save user to db
      .catch(err => { res.status(500).json(err) })

  }
  else
  {
    res.status(400).json({ message: "Please provide username and password" })
  }
})
module.exports = router