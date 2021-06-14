const express = require('express');
const gameController = require('../controllers/gameController');


const router = express.Router();
/* TODO */
router.route('/')
    .get(
        gameController.getFiveMorePopularGames,
        gameController.getFiveMoreRecentGames,
        gameController.getFiveTopRatedGames,
        gameController.getAllCategories,
        gameController.getAllPlatforms
        );
/* TODO */
router.route('/games')
    .get(gameController.getAllGames);

router.route('/games/category/:categoryId')
    .get(gameController.getAllGamesByCategories);

router.route('/games/platform/:platformId')
    .get(gameController.getAllGamesByPlatforms);

router.route('/games/:id')
    .get(gameController.getAllInfoOfOneGame);

/*router.route('/games/:id/review')
    .get(reviewController)
*/
module.exports = router;