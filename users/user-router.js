const router = require('express').Router()

const Users = require('./user-model')
// const db = require('../data/dbconfig')

router.get('/', (req, res) =>
{
  Users.find()
    // db('users').select('id', 'username').orderBy('id')
    .then(users =>
    {
      res.json(users)
    })
    .catch(err =>
    {
      console.log(err)
      res.send(err)
    })
})

module.exports = router