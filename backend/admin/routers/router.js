const express = require('express');
const adminController = require('../controllers/adminController')
const router = express.Router();

router.route('/admin/login')
    .get(adminController.getLoginPage);
router.route('/admin/home')
    .get(adminController.homePage);
router.route('/admin/reports')
    .get(adminController.getAllReports);
router.route('/admin/messages')
    .get(adminController.getAllMessage);
router.route('/admin/reports/:reviewId/delete')
    .delete(adminController.deleteReview)
router.route('/admin/reports/:reviewId/clean')
    .patch(adminController.cleanBadReport);

module.exports = router;