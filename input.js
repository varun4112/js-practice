const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Enter Your Name: ', (input) => {
	name=input
	nameprint(name)
	rl.close();
});

let name

function nameprint(name){
	console.log(`my name is ${name}`)
}