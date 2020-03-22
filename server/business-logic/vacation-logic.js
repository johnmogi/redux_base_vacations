const dal = require("../dal");

async function getAllVAcsAsync() {
  const sql = `SELECT vacationID, vacationName,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
  const vacs = await dal.executeAsync(sql);
  return vacs;
}
async function getOneVAcAsync(id) {
  const sql = `SELECT vacationID, vacationName,description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations where vacationID = ${id}`;
  const vac = await dal.executeAsync(sql);
  return vac;
}
module.exports = {
  getAllVAcsAsync,
  getOneVAcAsync
};

// DATE_FORMAT(startDate, "%m/%d/%Y") as startDate
