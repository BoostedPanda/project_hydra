var express = require('express');
var router = express.Router();
const crypto = require('crypto')
var { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient()

router.post('/', async function(req, res, next) {

    const {
        username,
        password
    } = req.body

    let hashedPassword = crypto.createHash('md5').update(password).digest("hex")

  const user = await prisma.users.findMany({
      select: {
          id: true,
          username: true,
      },
      where: {
          username: username,
          password: hashedPassword
      },


  })

  const userId = user[0]?.id

  const role = await prisma.user_role.findMany({
      where: {
          user_id: userId
      }
  })

  const roleId = role[0]?.role_id

  const userRole = await prisma.role.findMany({
      select: {
          name: true,
      },
      where: {
          id: roleId
      }
  })

  user[0].role = userRole[0]?.name

  if (!user.length > 0) {
      res.status(401).send()
      return
  }

  const token = await generateToken(user)

  res.json({
      user,
      token
  })

});

async function generateToken(user){

    const claims = {
        username: user[0]?.username
    }


    const token = jwt.sign(claims, process.env.TOKEN_SECRET, {
        expiresIn: '24h'
    })

    return token
}

module.exports = router;
