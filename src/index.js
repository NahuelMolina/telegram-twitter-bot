const api = require('./bot/main').api;
const mp = require('./bot/main').mp;
const  Task  = require('./tasks/task.messaging.js').Task;


api.setMessageProvider(mp)
api.start()
	.then(() => {
		console.log(`API is started`)
	})
	.catch(console.err)

api.on('update', async (msg) => {
	const { message } = msg;
	try{
		const tweet = message.text;
		const task = new Task(tweet);
		await task.post();
	}catch(e){
		console.log(`Here is an error: (index.js) => ${e}`);
	}
})
