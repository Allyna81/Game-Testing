const express = require('express');
const auth = require('../middleware/auth');
const gameController = require('../controllers/gameController');
const reviewController = require('../controllers/reviewController');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/')
    .get(gameController.homePage);
router.route('/games')
    .get(gameController.getAllGames);
router.route('/games/category/:categoryId')
    .get(gameController.getAllGamesByCategories);
router.route('/games/platform/:platformId')
    .get(gameController.getAllGamesByPlatforms);
router.route('/games/:id')
    .get(gameController.getAllInfoOfOneGame);
router.route('/games/:id/review')
    .get(reviewController.getAllReviewsOfAGame);
router.route('/signup')
    .post(userController.signUp);
router.route('/login')
    .post(userController.login);
router.route('/profile')
    .get(auth.authenticateToken,userController.getProfile);

module.exports = router;