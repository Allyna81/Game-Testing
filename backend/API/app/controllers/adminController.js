const { getAllMessage, deleteReviewReported } = require('../dataMappers/adminDataMapper')
const adminDataMapper = require('../dataMappers/adminDataMapper')

module.exports = {

    async adminLogin(req,res){

            /* TODO */

    },
    async getAllReports(_,res){

        try {

            const reports = await adminDataMapper.getAllReports();
            res.status(200).json(reports);
        } catch (error) {
            console.error(error)
            res.status(500).json("Error server")
        } 
    },
    async getAllMessage(_,res){

        try {

            const messages = await adminDataMapper.getAllMessages();
            res.status(200).json(messages);
        } catch (error) {
            console.error(error)
            res.status(500).json("Error server")
        } 
    },
    async deleteReview(req,res){

       try {

            const reviewId = parseInt(req.params.reviewId,10);

            if(!reviewId) {
                return next();
            }
            const reviewDelete = await adminDataMapper.deleteReviewReported(reviewId); 
            res.status(200).json('Review deleted');
        } catch (error) {
            console.error(error);
            res.status(500).json("Error server");
        }   

    },
    async cleanBadReport(req,res){

        try {

            const reviewId = parseInt(req.params.reviewId,10);

            if(!reviewId) {
                return next();
            }

            const reviewClean = await adminDataMapper.cleanReviewReportedForNothing(reviewId); 
            res.status(200).json('Review is clean');
        } catch (error) {
            console.error(error);
            res.status(500).json("Error server");
        } 
    }
}