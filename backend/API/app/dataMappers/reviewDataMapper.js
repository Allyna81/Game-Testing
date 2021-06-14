const client = require('../client');

module.exports = {
    async getAllReviewsOfOneGame(gameId) {
        const result = await client.query(`
        SELECT * FROM "review" 
        WHERE "gameId" = $1`,[gameId]);
        return result.rows;
    }
}