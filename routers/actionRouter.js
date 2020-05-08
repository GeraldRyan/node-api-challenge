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

router.get('/:id', (req, res) =>{
  actions.get(req.params.id)
  .then(theAction =>{
    res.status(200).json(theAction)
  })
  .catch(err =>{
    res.status(500).json({message:"Action Not found"})
  })
})

router.post('/', (req, res) =>{
  actions.insert(req.body)
  .then(allActions =>{
    res.status(200).json(allActions)
  })
  .catch(err =>{
    res.status(500).json({message:"Broken"})
  })
})

router.put('/:id', (req, res) =>{
  actions.update(req.params.id,req.body)
  .then(allActions =>{
    res.status(200).json(allActions)
  })
  .catch(err =>{
    res.status(500).json({message:"Broken"})
  })
})

router.delete('/:id', (req, res) =>{
  actions.remove(req.params.id)
  .then(allActions =>{
    res.status(200).json(allActions)
  })
  .catch(err =>{
    res.status(500).json({message:"Broken"})
  })
})

module.exports = router