const chinelos = require("../data/chinelos")

const controller = {
    index:( req,res) => res.send(chinelos)
   
}


module.exports = controller