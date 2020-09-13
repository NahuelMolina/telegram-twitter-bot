require('dotenv').config();

exports.tweet_tokens = {
	consumer_key:process.env.CONSU_KEY,
	consumer_secret:process.env.CONSU_SEC,
	access_token:process.env.ACCESS_TOK,
	access_token_secret:process.env.ACCESS_TOK_SEC
}

exports.telegram_tokens = {
	token: process.env.TOKEN_TEL
}
