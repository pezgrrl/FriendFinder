var Friends = require("../data/friends.js");

module.exports = function (app) {

    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(Friends);
    });


    app.post("/api/friends", function (req, res) {

        var userData = req.body;

        var totalDifference = 0;

        var allDifferences = [];


        for (var i = 0; i < (Friends.length - 1); i++) {


            for (var j = 0; j < 10; j++) {

                totalDifference += Math.abs(Friends[i].scores[j] - newFriend.scores[j]);
            }


            allDifferences.push(totalDifference);

            totalDifference = 0;
        }


        var bestMatch = Friends[allDifferences.indexOf(Math.min.apply(null, allDifferences))];

        res.send(bestMatch);
        console.log(bestMatch);

    });
}