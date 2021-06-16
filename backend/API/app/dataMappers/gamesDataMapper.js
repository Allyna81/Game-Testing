require('dotenv').config()
const client = require('../client');
const axios = require('axios');

module.exports = {
    /* REFACTO POUR POINTER SUR L'API les reviews */
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
        const response = await axios({
            url: "https://api.igdb.com/v4/genres",
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID,
            },
            data: "fields id,name;limit 30;"
          });
          return response.data;
    },
    async getAllPlatforms () {
        const platforms = await axios({
            url: "https://api.igdb.com/v4/platforms",
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID,
            },
            data: "fields name;limit 100;"
          });
          return platforms.data;
    },
    /* REFACTO POUR POINTER SUR L'API les reviews */
    async getFiveMoreRecentGames() {
        const recentGames = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: "fields release_dates.date,involved_companies.company.name,name,genres.name,platforms.name,cover.url;where release_dates.date > 1609459200;sort release_dates.date desc;limit 5;"
          });
          return recentGames.data;
    },
    /* REFACTO POUR POINTER SUR L'API les reviews */
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
    /* REFACTOR POUR POINTER SUR L'API */   
    },
    async getFiveMorePopularGames() {

        const recentGames = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: "fields aggregated_rating,release_dates.date,involved_companies.company.name,name,genres.name,platforms.name,cover.url;where release_dates.date > 1609459200;sort aggregated_rating desc;limit 5;"
          });
          return recentGames.data;
    },
    /* REFACTO POUR POINTER SUR L'API les reviews*/
    async getAllInformationsofOneGame (gameId) {
        const game = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: `fields name,release_dates.date,summary,involved_companies.company.name,videos.video_id,genres.name,screenshots.url,platforms.name,cover.url;where id = ${gameId};`
          });
          return game.data;
    },
    /* REFACTO POUR POINTER SUR L'API les reviews */
    async getAllGamesByCategories(categoryId) {
        const gamesByCategories = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: `fields release_dates.date,involved_companies.company.name,name,genres.name,platforms.name,cover.url;where genres = ${categoryId};sort release_dates.date desc;limit 100;`
          });
          return gamesByCategories.data;
    },
    /* REFACTO POUR POINTER SUR L'API les reviews */
    async getAllGamesByPlatforms(platformId) {
        const gamesByPlatform = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: `fields release_dates.date,involved_companies.company.name,name,genres.name,platforms.name,cover.url;where platforms.id = ${platformId};sort release_dates.date desc;limit 100;`
          });
          return gamesByPlatform.data;
        }
    }