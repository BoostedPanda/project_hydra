var express = require('express');
var router = express.Router();

router.get('/', async function(req, res) {

  const db = req.app.locals.db;

  const {
      username,
      password
  } = req.body;



  db.query("SELECT `id`, `name`, `nickname`, `rank` FROM members ORDER BY `id`", [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if(!result.length > 0) {
      return res.status(404).send()
    }
    res.send(result)
  })



});

router.post('/', async function(req, res) {

    const db = req.app.locals.db;

    const {
        username,
        password
    } = req.body;



    db.query("SELECT id FROM users WHERE username = ? AND password = md5(?)", [username, password], (err, result) => {
      if (err) {
        console.log(err);
      }
      if(!result.length > 0) {
        return res.status(404).send()
      }
      res.send({
        token: 'secret123',
        result
      })
    })



  });

module.exports = router;