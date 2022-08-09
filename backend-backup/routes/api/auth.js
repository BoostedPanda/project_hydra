var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/', async function(req, res) {

    const {
        username,
        password
    } = req.body

    const db = req.app.locals.db;


    let result = await db.awaitQuery(`SELECT * FROM users`)

//   db.query("SELECT id, username FROM users WHERE username = ? AND password = md5(?)", [username, password], (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         if(!result.length > 0) {
//           return res.status(404).send()
//         }
//         res.send(result)
//       })


    // const user = await findUser(username, password, db)
    


    // if (!user){
    //     res.status(401).send()
    //     return
    // }

    // user.roles = await getRoles(user.id, db)

    // const token = await generateToken(user)

    // res.json({token});
  });

 async function generateToken(user){

    const claims = {
        fname: user.first_name,
        lname: user.last_name,
        email: user.email,
        roles: user.roles.map(x => x.name)
    }



      const token = jwt.sign(claims, process.env.TOKEN_SECRET, {
          expiresIn: '1h'
      })


      return token;
  }

  async function getRoles(userId, db) {

    const sql = `
    SELECT id,
            name
        FROM role
	INNER JOIN user_role
            ON user_role.role_id = role.id
        WHERE user_role.user_id = $1
    `;

    const result = await db.query(sql, [userId])

    return result.rows;
  }


  async function findUser(username, password, db) {
      



    // const result = await db.query(sql, [username, password])

    // let user = result.rows.length 

    // : undefined;


  }

  module.exports = router;