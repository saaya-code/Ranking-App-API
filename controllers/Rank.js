const etudiant = require('../models/Etudiant')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllRanks = asyncWrapper(async (req, res) => {
  const etud = await etudiant.find({})
  res.status(200).json({ etud })
  console.log(req.body)
})

const createRank = asyncWrapper(async (req, res) => {
  console.log(req.body)
  const etud = await etudiant.create(req.body)
  res.status(201).json({ etud })
  console.log("Added "+ etud.name);
})



module.exports = {
  getAllRanks,
  createRank,
}
