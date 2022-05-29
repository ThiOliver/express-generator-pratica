const chinelos = require("../data/chinelos")

const controller = {
    index:( req,res) => res.render('chinelos',{title: "Chinelos", chinelos: chinelos})
   
}


module.exports = controller