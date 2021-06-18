require('dotenv').config()
const client = require('../client');
const axios = require('axios');

module.exports = {
    async getAllGames () {
        const games = await axios({
            url: "https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                'Client-ID': process.env.CLIENT_ID  
            },
            data: "fields involved_companies.company.name,name,genres.name,platforms.name,cover.url;limit 100;"
          });
          return games.data;
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
    async getFiveTopRatedGames() {

        const dataPopularity = await client.query(`SELECT "gameId",ROUND(AVG("global_note")) AS average FROM "review" GROUP BY "gameId" ORDER BY average DESC LIMIT 5;`);
        let gamesId = [];
        for (const elt of dataPopularity.rows) {
            gamesId.push(elt.gameId)
        }
        gamesId = gamesId.join()
            const recentGames = await axios({
                url: "https://api.igdb.com/v4/games",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+ process.env.AUTHORIZATION,
                    'Client-ID': process.env.CLIENT_ID  
                },
                data: `fields release_dates.date,involved_companies.company.name,name,genres.name,platforms.name,cover.url;where id = (${gamesId});limit 5;`
              });
              return recentGames.data;
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