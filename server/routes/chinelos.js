const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.send("Só os chinelos")
})

module.exports = router
