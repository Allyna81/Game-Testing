const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const userDataMapper = require('../dataMappers/userDataMapper');
const reviewDataMapper = require('../dataMappers/reviewDataMapper');

module.exports = {
    async signUp (req,res,next) {

        try {

            const errors = [];
            const formData = req.body;
            
            if(formData.pseudo == null || formData.email == null || formData.password == null ||
                formData.passwordConfirm == null) {
                    return res.status(400).json('Error , missing parameters')
                }

            if (!formData.pseudo) {
                errors.push({
                    fieldname: 'pseudo',
                    message: `pseudo is obligatory.`
                });
            }
            if (!emailValidator.validate(formData.email)) {
                errors.push({
                    fieldname: 'email',
                    message: `email are invalid syntax.`
                });
            }
            if (formData.password.length < 6) {
                errors.push({
                    fieldname: 'password',
                    message: `Need 6 characters or more for password.`
                });
            }

            if (formData.password !== formData.passwordConfirm) {
                errors.push({
                    fieldname: 'passwordConfirm',
                    message: `password and confirm password`
                });
            }
            if (formData.email) {
                const emailAlreadyInDb = await userDataMapper.getEmailInDatabase(formData.email);
            if (emailAlreadyInDb) {
                    errors.push({
                        fieldname: 'email',
                        message: `email already exists.`
                    });
            }
            }

            if (errors.length > 0) {
                res.status(400).json({ errors });
                return next();
            }
            
            formData.password = await bcrypt.hash(formData.password, 10);
            const newUser = await userDataMapper.createUser(formData);
            return res.status(201).json("User has created");

    } catch (error) {
        console.error(error);
        res.status(500).json('Error server');
    }
},
    async login (req,res,next) {

        try {

            const formData = req.body;
            if(formData.email == null || formData.password == null) {
                    return res.status(400).json('Error , missing parameters')
                }
            const errors = [];

            if (!emailValidator.validate(formData.email)) {
                errors.push({
                    fieldname: 'email',
                    message: `email are invalid syntax.`
                });
            }

            if (formData.password.length < 6) {
                errors.push({
                    fieldname: 'password',
                    message: `Need 6 characters or more for password.`
                });
            }
            const user = await userDataMapper.FindUserInDatabase(formData.email);

            if (!user) {
                errors.push({
                    fieldname: 'user',
                    message: `user not found.`
                });
            }

            const isPasswordValid = await bcrypt.compare(formData.password, user.password);

            if (!isPasswordValid) {
                errors.push({
                fieldname: 'email/password',
                message: `Combinaison email/password is incorrect.`
            });
            }
            if (errors.length > 0) {
                res.status(400).json({ errors });
                return next();
            }
            const accessToken = jwt.sign(user.pseudo,process.env.JWT_SIGN_SECRET);
            return res.json ({ accessToken });

        } catch (error) {         
                console.error(error);
                return res.status(500).json('Error server');
            }
},
    async getProfile(req,res) {
        console.log(req.user)
        try{
        const data = await userDataMapper.getProfile(req.user);
        const reviews = await reviewDataMapper.getAllReviewsOfUser(data.id);
        return res.status(200).json({
            pseudo : data.pseudo,
            picture_url : data.picture_url,
            email: data.email,
            create_date : data.create_date,
        reviews});
    } catch (error) {
        console.error(error);
        return res.status(500).json('Erreur serveur')
    }
    }
}