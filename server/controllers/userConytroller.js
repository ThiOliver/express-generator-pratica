const users = require('../data/users')
const controller = {
index: (req, res, next) => res.render('users',{title: "Usuários", users: users})
}


module.exports = controller