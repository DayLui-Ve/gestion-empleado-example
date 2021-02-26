const { createEmployeeDoc } = require("../models/empleados");
const { response } = require("../utils/response");

module.exports = async event => {
  
    const data = JSON.parse(event.body);

    await createEmployeeDoc(data);

    return response(true, null, "Empleado creado");
  
};