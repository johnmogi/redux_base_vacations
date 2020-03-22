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
module.exports = router;
