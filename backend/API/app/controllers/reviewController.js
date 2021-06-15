const reviewDataMapper = require('../dataMappers/reviewDataMapper');
const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {
    async getAllReviewsOfAGame (req,res,next) {
        try {

            const gameId = parseInt(req.params.id,10);

            if(!gameId) {
                return next();
            }

            const reviews = await reviewDataMapper.getAllReviewsOfOneGame(gameId);

            if(!reviews) {
                res.status(404).json("Ressource not found");
            }
            res.status(200).json(reviews);
        } catch (error) {
            console.error(error)
            res.status(500).json("Error server")
        } 
    },
    async postReview (req,res,next) {
        try {
            const gameId = parseInt(req.params.id, 10);
            const userId = await userDataMapper.getIdOfMember(req.user);
            const data = req.body;
            if(!data){
                return next();
             }

            const review = await reviewDataMapper.insertReviewOnGame(data,userId.id,gameId);
            res.status(201).json(review);

        } catch (error) {
            console.error(error);
            return res.status(500).json('Server error')
        }
    }
}