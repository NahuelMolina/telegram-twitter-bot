const twit = require('twit');
const config = require('../config/config.js').tweet_tokens;
const t = twit(config);

exports.Task = class Task {
	constructor(tweet){
		this.tweet = tweet;
	}

	post() {
		
		const options = {
			status:this.tweet
		};
		try {
		
			t.post('statuses/update', options,() => {
				console.log(`Successful post`);
			});
		}catch(e){
			console.log(`For a while, here is an error posting a tweet ${this.tweet}, i don't what's going on!`);
		}
	}
}


