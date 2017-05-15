var request = require("request")
 
    // JSON to be passed to the QPX Express API
    var requestData = {
        "request": {
            "slice": [
                {
                    "origin": "ATL",
                    "destination": "JFK",
                    "date": "2017-05-17"
                }
            ],
            "passengers": {
                "adultCount": 1,
                "infantInLapCount": 0,
                "infantInSeatCount": 0,
                "childCount": 0,
                "seniorCount": 0
            },
            "solutions": 2,
            "refundable": false
        }
    }
 
    // QPX REST API URL (I censored my api key)
    url = "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAo4DkMcfZ6eFnN0nY3_PiPtNF8ch5ffW4 "
 
    // fire request
    request({
    url: url,
    method: "POST",
    headers: {
        "content-type": "application/json",
        },
    body: JSON.stringify(requestData)
//  body: JSON.stringify(requestData)
    }, function (error, response, body) {
       var data = JSON.parse(response.body);
      console.log("I have found a flight to" + (JSON.stringify(data.trips.data.airport[0].code) )+ " to "+ (JSON.stringify(data.trips.data.airport[2].code) ) + " via " + (JSON.stringify(data.trips.data.airport[1].code) )+ " and the ticket amounts "+JSON.stringify(data.trips.tripOption[0].saleTotal)+ " thank you"); 
  console.log(JSON.stringify(data.trips.tripOption[0].saleTotal));
  console.log(JSON.stringify(data.trips.tripOption[1].saleTotal));
    });