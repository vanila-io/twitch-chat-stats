'use strict';

let mongoose = require('mongoose');

let GameList = new mongoose.Schema(
{
	name: String,
	nameId: String,
});

module.exports = mongoose.model('GameList', GameList);