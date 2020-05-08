const router = require('express').Router()
const actions = require('../data/helpers/actionModel')

router.get('/', (req, res) =>{
  actions.get()
  .then(allActions =>{
    res.status(200).json(allActions)
  })
  .catch(err =>{
    res.status(500).json({message:"Broken"})
  })
})

module.exports = router