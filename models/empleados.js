const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const TableName = "Empleados-Nex";

const createEmployeeDoc = async (Item) => {

    const params = {
        TableName,
        Item
    }

    return docClient.put(params).promise();
}

module.exports = {
    createEmployeeDoc
}