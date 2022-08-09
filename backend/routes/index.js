var express = require('express');
var router = express.Router();
var { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()





/* GET home page. */
router.get('/', async function(req, res, next) {

  const users = await prisma.members.findFirst()

  res.json(users)

});

module.exports = router;
