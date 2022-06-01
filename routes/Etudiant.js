const express = require('express')
const router = express.Router()

const {
  getAllRanks,
  createRank,
} = require('../controllers/Rank')

router.route('/').get(getAllRanks).post(createRank)


module.exports = router
