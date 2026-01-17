const router = require('express').Router();
router.use('/', require('./swagger'));

router.get("/", (req, res) =>{
    //#swagger.tags=['Hello world']
    res.send("Welcome to CSE341 Course!")
})

router.use('/users', require('./users'));

module.exports = router;