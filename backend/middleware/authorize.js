const jwt = require('jsonwebtoken');

function authorize() {
return function (req, res, next){

    const authorizationHeader = req.headers['authorization'];

    const token = authorizationHeader?.split(' ')[1]


    if (!token) {
      res.status(401).send()
      return
    }

    jwt.verify(token, process.env.TOKEN_SECRET, async function(err){

      if (err) {
        res.status(401).send()
        return
      }

      next();
    })

  }
}

module.exports = authorize