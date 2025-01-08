const {Router} = require('express')
const { Index } = require('../controllers/index.controller.js')


const router = Router()

router.get('',Index)

module.exports = router
