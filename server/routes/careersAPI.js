const express = require("express");
const router = express.Router();
const request = require("request-promise");




/* GET users listing. */
router.get("/", function(req, res, next) {
  let options = {
    url: `https://data.calgary.ca/resource/jipb-w9dg.json`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    data.sort(function(a, b){
      return new Date(a.closing_date) - new Date(b.closing_date);
    });
    res.status(200).json(data);
  });
});

module.exports = router;