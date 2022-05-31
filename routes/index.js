const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.render("index", { title: "Express" });
});

module.exports = router