var express = require('express');
var router = express.Router();
const crypto = require('crypto')
var { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
var authorize = require('../../middleware/authorize')

const prisma = new PrismaClient()


router.get('/', authorize(),async function(req, res, next) {

const authorizationHeader = req.headers['authorization']

const token = authorizationHeader?.split(' ')[1]



const members = await prisma.members.findMany()

res.json(members)

});

module.exports = router;