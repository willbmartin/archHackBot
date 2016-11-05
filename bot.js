
/*Late Nite Notes: Make the bot read the words in the tweet. If any of the words are on our 
list of "trouble words" then add that word to our google search query. This will (maybe) provide
provide us with a more accurate diagnosis.
*/



var Twit = require('twit'); // Twitter library
var T = new Twit(require('./config.js')); // config file; api keys
var google = require('google'); // Our (custom) Google library
var symptoms = require('./symptomDict.js');

//setInterval(runner, 1000 * 15); // runs the code every 30 min

function runner() {
  retweetLatest(symptoms.randHash());
  //symSearch("headache");
  //console.log(myResults);
  //replyTweet("lol");
  
}

// This function tweets the String in the variable message
function tweetMessage(message) {
  T.post('statuses/update', { status: message }, function(err, data, response) {
  		console.log(data);
  })
}

// This function selects a tweet to respond to
var tweetId;
var replyId;
function replyTweet(query, message) {
    var querySearch = {q: query, count: 10, result_type: "recent"}; 
    T.get('search/tweets', querySearch, function (error, data) {
      console.log(error, data);
    // If our search request to the server had no errors...
    if (!error) {
        // ...then we grab the ID of the tweet we want to retweet...
      var replyId = data.statuses[0].id_str;
      // ...and then we tell Twitter we want to retweet it!
      T.post('statuses/update', {status:  message + " @" + data.statuses[0].user.screen_name, in_reply_to_status_id: replyId}, function (error, response) {
          if (response) {
            console.log('Success! Check your bot, it should have retweeted something.')
          }
          // If there was an error with our Twitter call, we print it out here.
          if (error) {
            console.log('There was an error with Twitter:', error);
          }
        });
      }
    // However, if our original search request had an error, we want to print it out here.
      else {
        console.log('There was an error with your hashtag search:', error);
      }
    });

    //console.log(tweetId);
    //id = tweetData[Math.random() * 10].id_str;
}


function retweetLatest(myTag) {  
var tagSearch = {q: myTag, count: 10, result_type: "recent"}; 
T.get('search/tweets', tagSearch, function (error, data) {
  // log out any errors and responses
  console.log(error, data);
  // If our search request to the server had no errors...
  if (!error) {
    // ...then we grab the ID of the tweet we want to retweet...
  var retweetId = data.statuses[0].id_str;
  // ...and then we tell Twitter we want to retweet it!
    T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
      if (response) {
        console.log('Success! Check your bot, it should have retweeted something.')
      }
      // If there was an error with our Twitter call, we print it out here.
      if (error) {
        console.log('There was an error with Twitter:', error);
      }
    })
  }
  // However, if our original search request had an error, we want to print it out here.
    else {
      console.log('There was an error with your hashtag search:', error);
    }
  });
}



//Symptom Google Searcher
var myResults;
function symSearch(query) {
    google.resultsPerPage = 3
    var nextCounter = 0
    var treatmentResults = ["","",""];


    google(query + " treatment", function (err, res){
      if (err) console.error(err)


      var forCount = 0
      var grammar = ''
      for (var i = 0; i < 3; ++i) {
        if(0 == forCount) {
          grammar = 'First '
        } else if (1 == forCount) {
          grammar = 'Second '
        } else {
          grammar = 'Third '
        }
        var link = res.links[i];
        var finalResult = grammar + 'result: ' + link.title + ' - ' + link.href;
        //console.log(finalResult);
        treatmentResults[forCount] = link.title + ' - ' + link.href;
        forCount += 1
      }
      for (var j = 0; j < treatmentResults.length; j++) {
        if (treatmentResults[j].includes("WebMD")) {
          console.log(treatmentResults[j]);

          // tweetMessage(treatmentResults[j]);
          replyTweet(query, treatmentResults[j]);
          return null;
        }

      }

      for (var j = 0; j < treatmentResults.length; j++) {
        if (!treatmentResults[j].includes("null")) {
          console.log(treatmentResults[j]);
          //tweetMessage(treatmentResults[j]);
          replyTweet(query, treatmentResults[j]);
          return null;
        }
      }

      //To go to next page of results: 

      // if (nextCounter < 4) {
      //   nextCounter += 1
      //   if (res.next) res.next()
      // }
    })
}

runner();