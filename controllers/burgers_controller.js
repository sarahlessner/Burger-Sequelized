var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(results) {
    // results are available to us inside the .then

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
  // .then(function(results){
    
  //   // res.json(results);
  // });
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
  // .then(function(results) {
  //     res.redirect("/");
  //   });
  // burger.updateOne("devoured", 1, req.params.id, function() {
    res.redirect("/");
  // });
});


// Export routes for server.js to use.
module.exports = router;