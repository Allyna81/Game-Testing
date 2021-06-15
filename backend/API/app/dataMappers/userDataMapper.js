const client = require('../client');

module.exports = {
   async getEmailInDatabase(email) {
        const result = await client.query('SELECT email FROM "user" WHERE email = $1',[email]);
        return result.rows[0];
   },
   async createUser(data) {
       const result = await client.query(
           `INSERT INTO "user" (pseudo,email,password)
            VALUES ($1,$2,$3) RETURNING *`,
            [
                data.pseudo,
                data.email,
                data.password
            ]
        );
        return result.rows[0];
   },
   async FindUserInDatabase(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1',[email])
        return result.rows[0]
   }
}