

const response = (success, data = null, message = null, status = null) => {

    const body = {
        success: success,
        status: status || 200,
        data: data || null,
        message: message || null
    }

    return {
        statusCode: status || 200,
        body: JSON.stringify(body,null,2),
    };
}

module.exports = {
    response
}