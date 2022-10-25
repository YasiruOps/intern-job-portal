"use strict";

var express = require('express');

var router = express.Router();

var ForumQuestionHandler = require("../handlers/ForumQuestionHandler");

var ForumQuestionFetch = require("../handlers/ForumQuestionFetchHandler");

var EditForumQuestionHandler = require("../handlers/EditForumQuestionHandler");

var ForumReactHandler = require("../handlers/ForumReactHandler"); //create


router.route('/add').post(function (request, response) {
  ForumQuestionHandler(request, response);
}); //update

router.route('/update/:id').put(function (request, response) {
  EditForumQuestionHandler(request, response);
}); //fetch

router.route('/').get(function (request, response) {
  ForumQuestionFetch(request, response);
}); //update reacts

router.route('/reacts').put(function (request, response) {
  ForumReactHandler(request, response);
});
module.exports = router;