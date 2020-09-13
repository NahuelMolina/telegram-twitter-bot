const http = require('https');
const result = require('dotenv').config();
const {password, username} = require('./bot/config/config');


try{
    
    if(result.error){
        throw result.error;
    }else{
        console.log('Not error on .env configuration');
    };

}catch(e){
    console.log(`There is an error on enviroment configuration: ${e}`);
};

const host = process.env.DEA_URL;
const path = process.env.DEA_URL_MAIN_PAGE;
const auth = {
    username,
    password
};

options = {
    host,
    path,
    auth
}

console.log('My own dates of Dea:');
console.log(`${options.auth.username}`);
console.log(`${options.auth.password}`);

exports.botRequest = class botRequest {
    constructor(msg){
        this.msg = msg;
    }
    
    printMsg(){
        console.log(`Thats my message ${this.msg}`)
    }

    requesting(){
        http.get('https://www.google.com', (res) => {
            const {statusCode} = res;
            console.log(`Status Code: ${statusCode}`);
            res.on('data', (chunk) => console.log('Data received'));
	    
            res.on('end', (chunk)=> console.log('the end'));	
        }).end();
    }
};

