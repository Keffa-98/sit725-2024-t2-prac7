const {Router} = require('express')
const { fetchAllCats, addCat } = require('../controllers/cats.controller')


const router = Router()

router.get('',fetchAllCats)
router.post('',addCat)

module.exports = router
