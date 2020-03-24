const dal = require("../dal");

async function getAllVAcsAsync() {
  const sql = `SELECT vacationID, description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations`;
  const vacs = await dal.executeAsync(sql);
  return vacs;
}
async function getOneVAcAsync(id) {
  const sql = `SELECT vacationID, description, destination, picFileName, DATE_FORMAT(startDate, "%m/%d/%Y") as startDate, DATE_FORMAT(endDate, "%m/%d/%Y") as endDate, price FROM vacations where vacationID = ${id}`;
  const vac = await dal.executeAsync(sql);
  return vac;
}
async function addVacAsync(vac) {
  const sql = `INSERT INTO vacations (description, destination, picFileName, startDate, endDate, price) VALUES('${vac.description}','${vac.destination}','${vac.picFileName}','${vac.startDate}','${vac.endDate}','${vac.price}')`;
  const info = await dal.executeAsync(sql);
  vac.id = info.insertId;
  return vac;
}
module.exports = {
  getAllVAcsAsync,
  getOneVAcAsync,
  addVacAsync
};

// DATE_FORMAT(startDate, "%m/%d/%Y") as startDate
