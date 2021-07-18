const { createEmployeeDoc } = require("../models/empleados");
const { response } = require("../utils/response");

module.exports = async event => {

    let responseData = {};

    try {
        
        const data = JSON.parse(event.body);
    
        await createEmployeeDoc(data);
    
        responseData = response(true, null, "Empleado creado");
        
    } catch (error) {
        
        responseData = response(false, error, "Empleado no creado", 400);
        
    }

    return responseData;    
  
};