const {router} = require('../config')
const skillaryCourseUpdation = require('../controllers/skillaryController')



router.post('/course',skillaryCourseUpdation)







module.exports = router