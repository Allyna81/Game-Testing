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
router.route('/games/category/:categoryId(\\d+)')
    .get(gameController.getAllGamesByCategories);
router.route('/games/platform/:platformId(\\d+)')
    .get(gameController.getAllGamesByPlatforms);
router.route('/games/:id(\\d+)')
    .get(gameController.getAllInfoOfOneGame);
router.route('/games/:id(\\d+)/review')
    .get(reviewController.getAllReviewsOfAGame);
router.route('/search')
    .post(gameController.searchGame);
router.route('/signup')
    .post(userController.signUp);
router.route('/login')
    .post(userController.login);
router.route('/contact')
    .post(userController.sendMessage);

/* ACCES MEMBRE */
router.route('/profile')
    .get(auth.authenticateToken,userController.getProfile)
    .patch(auth.authenticateToken,userController.updateProfile);
router.route('/games/:id(\\d+)/review')
    .post(auth.authenticateToken,reviewController.postReview);
router.route('/games/:id(\\d+)/review/:reviewId(\\d+)')
    .patch(auth.authenticateToken,reviewController.updateReview);

router.route('/games/:id(\\d+)/review/:reviewId(\\d+)/report')
    .patch(auth.authenticateToken,reviewController.reportReview);

router.route('/games/:id(\\d+)/review/:reviewId(\\d+)/upvote')
    .patch(auth.authenticateToken,reviewController.upVoteReview);

router.route('/games/:id(\\d+)/review/:reviewId(\\d+)/downvote')
    .patch(auth.authenticateToken,reviewController.downVoteReview);

module.exports = router;