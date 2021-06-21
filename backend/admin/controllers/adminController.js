const adminDataMapper = require('../dataMapper/adminDataMapper')

module.exports = {

    async getLoginPage (_,res) {
        res.render('login');
    },
    async homePage (_,res) {
        res.render('home');
    },
    async getAllReports(_,res){
            const reports = await adminDataMapper.getAllReports();
            console.log(reports);
            res.render('reports', {reports});
    },
    async getAllMessage(_,res){
            const messages = await adminDataMapper.getAllMessages();
            res.render('messages' , {messages});
    },
    async deleteReview(req,res){
            const reviewId = parseInt(req.params.reviewId,10);
            const reviewDelete = await adminDataMapper.deleteReviewReported(reviewId); 
            res.redirect('reports');
    },
    async cleanBadReport(req,res){
            const reviewId = parseInt(req.params.reviewId,10);
            const reviewClean = await adminDataMapper.cleanReviewReportedForNothing(reviewId); 
            res.render('reports');
    }
}