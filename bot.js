// This Example shows how to tweet a simple message.




// Our Twitter library
var Twit = require('twit');

// A String I Created to tweet
var message = "Hakuna Matata!";

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This function tweets the String in the variable message
function tweetMessage(message) {

T.post('statuses/update', { status: message }, function(err, data, response) {
  		console.log(data)
 })

}

// This function selects a tweet to respond to
var tweetId;
function selectTweet(query) {
    var tweets = T.stream('statuses/filter', {track: query}, function(stream) {
      stream.on('data', function(tweet) {
        console.log(tweet.text);
      });
      stream.on('error', function(error) {
        console.log(error);
      });
    });

    //TODO Store the ID of this tweet
    //TODO Store the ID of a random tweet to respond to
    //TODO Parse through that tweet (possibly write a helper function?)
    //TODO Conduct a google search and reply to the tweet

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

//tweetMessage(); // Run the function!
//console.log((90071992547409921).toString());
//selectTweet("leukemia");

setInterval(tweetMessage, 1000 * 60 * 60); // Tweets the message every hour

//

}
//Goog Stuffz

// Our (custom) Google library
var google = require('google');

//Symptom Google Searcher
function symSearch(query) {
    google.resultsPerPage = 25
    var nextCounter = 0

    google(query, function (err, res){
      if (err) console.error(err)

      for (var i = 0; i < res.links.length; ++i) {
        var link = res.links[i];
        console.log(link.title + ' - ' + link.href)
        console.log(link.description + "\n")
      }

      if (nextCounter < 4) {
        nextCounter += 1
        if (res.next) res.next()
      }
    })
}

//symSearch('milk');
retweetLatest("medicine");
//checkDM();

/*Late Nite Notes: Make the bot read the words in the tweet. If any of the words are on our 
list of "trouble words" then add that word to our google search query. This will (maybe) provide
provide us with a more accurate diagnosis.
*/