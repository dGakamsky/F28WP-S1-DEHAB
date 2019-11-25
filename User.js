//based on an online tutorial from freecodecamp.org
/**
* @api {post} /api/user Create user
* @apiName Create new user
* @apiPermission admin
* @apiGroup User
*
* @apiParam  {String} [userName] username
* @apiParam  {String} [password] password
*
* @apiSuccess (200) {Object} mixed `User` object
*/

router.post('/',Controller.validate('createUser'), Controller.createUser)

const { validationResult } = require('express-validator/check');

const { body } = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'createUser': {
            return [
                body('userName', 'userName doesnt exist').exists(),
                body('email', 'Invalid email').exists().isEmail(),
                body('phone').optional().isInt(),
                body('status').optional().isIn(['enabled', 'disabled'])
       ]
        }
    }

exports.createUser = async (req, res, next) => {
    try {
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { userName, password } = req.body

        const user = await User.create({ userName,password})

        res.json(user)
    } catch (err) {
        return next(err)
    }
}