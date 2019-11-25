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