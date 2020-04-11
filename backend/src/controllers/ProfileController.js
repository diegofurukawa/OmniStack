const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs_id = request.headers.Authorization;

        const incident = await connection('incidents')
            .where('ongs_id', ongs_id)
            .select('*');
    
        return response.json(incident);
    }
}