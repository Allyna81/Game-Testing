const client = require('./client');

module.exports = {
    async getAllGames () {
        const result = await client.query(`
        SELECT 
            game.*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            ARRAY_AGG( DISTINCT "category"."name"),
            AVG("review"."global_note") AS average
        FROM game
            JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
            JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
            JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
            JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
            JOIN "review" ON "game"."id" = "review"."gameId"
        GROUP BY game.id`);
        return result.rows;
    },
    async getAllCategories () {
        const result = await client.query(`SELECT * FROM category`);
        return result.rows;
    },
    async getAllPlatforms () {
        const result = await client.query(`SELECT * FROM platform`);
        return result.rows;
    },
    async getFiveMoreRecentGames() {
        const result = await client.query(`
        SELECT 
            game.*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            ARRAY_AGG( DISTINCT "category"."name"),
            AVG("review"."global_note") AS average
        FROM game
            JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
            JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
            JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
            JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
            JOIN "review" ON "game"."id" = "review"."gameId"
        GROUP BY "game"."id" 
        ORDER BY "release_date"
        DESC
        LIMIT 5
        `);
        return result.rows;
    },
    async getFiveTopRatedGames() {
        const result = await client.query(`
        SELECT 
            game.*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            ARRAY_AGG( DISTINCT "category"."name"),
            AVG("review"."global_note") AS average
        FROM game
            JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
            JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
            JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
            JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
            JOIN "review" ON "game"."id" = "review"."gameId"
        GROUP BY "game"."id" 
        ORDER BY average DESC
        LIMIT 5`);
        return result.rows;
        
    },
    async getFiveMorePopularGames() {

        /* TODO , GESTION DES NC POUR L'ORDER */
        const result = await client.query(`
        SELECT 
            game.*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            ARRAY_AGG( DISTINCT "category"."name")
        FROM game
            JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
            JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
            JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
            JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
        GROUP BY "game"."id" 
        ORDER BY "metacritic_score"
        DESC
        LIMIT 5
        `);
        return result.rows;
    },
    async getAllInformationsofOneGame (id) {
        const result = await client.query(`
        SELECT 
            game.*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            ARRAY_AGG( DISTINCT "category"."name"),
            AVG("review"."global_note") AS average
        FROM game
            JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
            JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
            JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
            JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
            JOIN "review" ON "game"."id" = "review"."gameId"
        WHERE "game"."id" = $1
        GROUP BY "game"."id"`, [id]);
        return result.rows[0];
    },
    async getAllReviewsOfOneGame(gameId) {
        const result = await client.query(`
        SELECT * FROM "review" 
        WHERE "gameId" = $1`[gameId]);
        return result.rows;
    },
    async getAllGamesByCategories(id) {
        const result = await client.query(`
        SELECT 
            "game".*,
            ARRAY_AGG( DISTINCT "category"."name"),
            AVG("review"."global_note") AS average
        FROM "game"
        JOIN "game_has_category" ON "game_has_category"."gameId" = "game"."id"
        JOIN "category" ON "category"."id" = "game_has_category"."categoryId"
        JOIN "review" ON "game"."id" = "review"."gameId" 
        WHERE "category"."id" = $1
        GROUP BY "game"."id"`, [id]
        )
        return result.rows;
        
    },
    async getAllGamesByPlatforms(id) {
        const result = await client.query(`
        SELECT 
            "game".*,
            ARRAY_AGG( DISTINCT "platform"."name"),
            AVG("review"."global_note") AS average
        FROM "game"
        JOIN "game_has_platform" ON "game_has_platform"."gameId" = "game"."id"
        JOIN "platform" ON "platform"."id" = "game_has_platform"."platformId"
        JOIN "review" ON "game"."id" = "review"."gameId" 
        WHERE "platform"."id" = $1
        GROUP BY "game"."id";`, [id]
        )
        return result.rows;
        }
    }