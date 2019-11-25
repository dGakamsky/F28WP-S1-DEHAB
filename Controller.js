//based on an online tutorial from freecodecamp.org
const User = require('..\F28WP-S1-DEHAB\User.js')

exports.createUser = (req, res, next) => {
    // validates user inputs
    const { userName, password } = req.body
    if (userName && password) {
        User.create({
            userName,
            password
        })
            .then(user => res.json(user))
            .catch(next)
    }
}