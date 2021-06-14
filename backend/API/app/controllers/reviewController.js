const reviewDataMapper = require('../dataMappers/reviewDataMapper');

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
    }
}