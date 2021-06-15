const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {
    async signUp (req,res,next) {

        try {

            const errors = [];
            const formData = req.body;
            console.log(formData);
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
            return res.json("User connect");
        } catch (error) {         
                console.error(error);
                return res.status(500).json('Error server');
            }
    }
}