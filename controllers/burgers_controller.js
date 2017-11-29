const express = require("express");
const router = express.Router();
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(results) {

    var hbsObject = {
      burgers: results
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.burger.create({
    name: req.body.name
  });
  res.redirect("/");
});

router.put("/:id", function(req, res) {
  db.burger.update({
      devoured: 1
    },{
      where: {
        id: req.params.id
      }
    });
    res.redirect("/");
});


// Export routes for server.js to use.
module.exports = router;
