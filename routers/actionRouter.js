const router = require('express').Router()
const actions = require('../data/helpers/actionModel')

router.get('/', (req, res) => {
    actions.get()
        .then(allActions => {
            res.status(200).json(allActions)
        })
        .catch(err => {
            res.status(500).json({ message: "Broken" })
        })
})

router.get('/:id', (req, res) => {
    actions.get(req.params.id)
        .then(theAction => {
           if (theAction != null) {  
            res.status(200).json(theAction)
           }
           else {
             res.status(400).json("Please enter valid id")
           }
        })
        .catch(err => {
            res.status(500).json({ message: "Action Not found" })
        })
})

router.post('/', (req, res) => {
  console.log("Req body", req.body)
    if (req.body.notes && req.body.description) {
        actions.insert(req.body)
            .then(newAction => {
                res.status(200).json(newAction)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    } else {
        res.status(318).json("Please provide a notes and description and matching project_id")

    }

})

router.put('/:id', (req, res) => {
    actions.update(req.params.id, req.body)
        .then(updatedAction => {
            res.status(200).json(updatedAction)
        })
        .catch(err => {
            res.status(500).json({ message: "Broken" })
        })
})

router.delete('/:id', (req, res) => {
    actions.remove(req.params.id)
        .then(asDeleted => {
            res.status(200).json(asDeleted)
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
})

module.exports = router