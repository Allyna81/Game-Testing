const express = require('express');
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middlewares/auth');
const localsMiddleware = require('../middlewares/locals');
const router = express.Router();

router.use(localsMiddleware);
router.use(authMiddleware.userToLocals);

router.route('/admin/login')
    .get(adminController.getLoginPage)
    .post(adminController.login);
router.route('/admin/home')
    .get(authMiddleware.checkAdmin,adminController.homePage);
router.route('/admin/reports')
    .get(authMiddleware.checkAdmin,adminController.getAllReports);
router.route('/admin/messages')
    .get(authMiddleware.checkAdmin,adminController.getAllMessage);
router.route('/admin/reports/:reviewId/delete')
    .get(authMiddleware.checkAdmin,adminController.deleteReview)
router.route('/admin/reports/:reviewId/clean')
    .get(authMiddleware.checkAdmin,adminController.cleanBadReport);
router.route('/logout')
    .get(authMiddleware.checkAdmin,adminController.logOut);
module.exports = router;