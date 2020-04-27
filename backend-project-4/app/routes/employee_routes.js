// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for employee
const Employee = require('../models/employee')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()


// INDEX 
// GET/employees
router.get('/employees',requireToken,(req,res,next) => {
    Employee.find({owner: req.user.id})
    .then(employees => res.status(200).json({employees:employees}))
    .catch(next)
})
//SHOW 
// Get /employees/:id
router.get('/employees/:id',(req,res,next) => {
    Employee.findById(req.params.id)
    .then(employee =>{
        res.status(200).json({employee:employee})
    })
    .catch(next)
})


//CREATE 
// post /employees/:user_id
//5e301a5fb287c3345a24d8f4
router.post('/employees/:user_id',(req,res,next) => {
    req.body.employee.owner = req.params.user_id
    console.log(req.body)
    Employee.create(req.body.employee)
    .then(employee => {
        res.status(201).json({employee})
    })
    .catch(next)
})


//Destroy 
// Delete - /employees/:id
router.delete('/employees/:id',requireToken,(req,res,next) => {
    Employee.findByIdAndRemove(req.params.id)
    .then(employee => res.status(204).json({employee}))
    .catch(next)
})


// update
// Patch  - /employees/:id
router.patch('/employees/:id',requireToken,(req,res,next) => {
    Employee.findByIdAndUpdate(req.params.id)
    .then(handle404)
    .then(employee => {
        requireOwnership(req, employee)
        return employee.update(req.body.employee)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router;