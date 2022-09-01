const {updateCourse,findcourse} = require('../controllers/category')
const {router} = require('../config')



router.post('/update',updateCourse)

router.get('/find',findcourse)









module.exports = router