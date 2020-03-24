const express = require("express");

const vacLogic = require("../business-logic/vacation-logic");
const router = express.Router();

router.get("/vacations", async (request, response) => {
  try {
    const vacs = await vacLogic.getAllVAcsAsync();
    response.json(vacs);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.get("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacLogic.getOneVAcAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// POST http://localhost:3000/api/vacations
router.post("/vacations", async (request, response) => {
  try {
    const vac = request.body;
    const addedVac = await vacLogic.addVacAsync(vac);
    response.status(201).json(addedVac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
module.exports = router;
