// This Example shows how to tweet a simple message.

// Our Twitter library
var Twit = require('twit');

// A String I Created to tweet
var message = "This is a test Tweet!";

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This function tweets the String in the variable message
function tweetMessage() {

T.post('statuses/update', { status: message }, function(err, data, response) {
  		console.log(data)
 })

}

tweetMessage(); // Run the function!

setInterval(tweetMessage, 1000 * 60 * 60); // Tweets the message every hour
