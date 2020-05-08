const router = require('express').Router()
const projects = require('../data/helpers/projectModel')


router.get('/', (req, res) => {
    projects.get()
        .then(allProjects => {
            res.status(200).json(allProjects)
        })
        .catch(err => {
            res.status(500).json({ message: "Broken" })
        })
})

router.get('/:id', validateById, (req, res) => {
    projects.get(req.params.id)
        .then(theProject => {
            res.status(200).json(theProject)
        })
        .catch(err => {
            res.status(500).json({ message: "Project Not found" })
        })
})

router.post('/', (req, res) => {
  console.log("Req body", req.body)
    if (req.body.name && req.body.description) {
        projects.insert(req.body)
            .then(newProject => {
                res.status(200).json(newProject)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    } else {
        res.status(318).json("Name and description required")

    }

})

router.put('/:id', validateById, (req, res) => {
    projects.update(req.params.id, req.body)
        .then(updatedProject => {
            res.status(200).json(updatedProject)
        })
        .catch(err => {
            res.status(500).json({ message: "Broken" })
        })
})

router.delete('/:id', validateById, (req, res) => {
    projects.remove(req.params.id)
        .then(asDeleted => {
            res.status(200).json(asDeleted)
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
})



function validateById (req, res, next) {

  projects.get(req.params.id)
  .then(bExists =>{
    if (bExists == null){
      res.status(400).json("Thou Shall not pass. (Wrong ID)")
    }
    else{
      next()
    }
  })

}


module.exports = router

