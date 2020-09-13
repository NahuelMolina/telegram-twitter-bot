const TG = require('telegram-bot-api');
const telegram = require('../config/config').telegram_tokens;

const token = telegram.token;
const params = {
	token:token
};

exports.api = new TG(params);
exports.mp = new TG.GetUpdateMessageProvider();

