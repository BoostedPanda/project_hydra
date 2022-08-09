var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { PrismaClient } = require('@prisma/client')
const cors = require('cors');

require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authApiRouter = require('./routes/api/auth')
var membersApiRouter = require('./routes/api/members')

var app = express();

const prisma = new PrismaClient()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/auth', authApiRouter);
app.use('/api/members', membersApiRouter);

module.exports = app;
