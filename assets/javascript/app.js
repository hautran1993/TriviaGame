$(document).ready(function(){

//when "start" button is clicked 
//1. a timeer of 30 seconds goes off
//2. a question is on display for that one question
//3. after clicking an answer it'll let the user know if the question answered was wrong or right
//4.if no user input , "says out of time" and continue on.
//the next question would cycle in.
//repeat step 1-4 until game over
//after all the questions were answer it will show how many answer the user got wrong and right.
//click start over, it does not reload the page but "reset" the game instead.
//good luck

//create var for array of questions
var questions = [{
	    question: "Who was 'Micheal Myers' first victim at age 6??",
	    choices: ["His Mother, His Sister, His Teacher, The Town Sheriff"],
	    answer: 1,
	    video: "",
	    time: 1000*30
	},{
		question: "Ghostface's mask in Scream is based on a painting by which famous artist?",
		choices: ["Edouard Manet, Andy Warhol, Edvard Munch, Claude Monet"],
		answer: 2,
		video: "",
		time: 1000*30
	},{
		question: "What was used for blood in the movie 'Psycho'?",
		choices: ["Catups, Corn syrup and Food coloring, Chocolate Syrup, Real Blood"],
		answer: 2,
		video: "",
		time: 1000*30
	},{
		question: "In the movie 'The Omen', who hangs themselves at Damien's fifth birthday party?",
		choices: ["His brother, His Nanny, His Priest, His Mother"],
		answer: 1,
		video: "",
		time: 1000*30
	},{
		question: "In the movie 'saw', what part of the body did the character had to imputate to escape in the end?",
		choices: ["His Left Hand, His Left foot, His Right Hand, His Right foot"],
		answer: 3,
		video: "",
		time: 1000*30
	},
];

var i


 	
//when "start" button is clicked
function startGame(){

}
//1. a timeer of 30 seconds goes off
//2. a question is on display for that one question
//3. after clicking an answer it'll let the user know if the question answered was wrong or right
//4.if no user input , "says out of time" and continue on.
//the next question would cycle in.
//repeat step 1-4 until game over
//after all the questions were answer it will show how many answer the user got wrong and right.
//click start over, it does not reload the page but "reset" the game instead.
//good luck




var timesRun=0;


var end = questions.length;

while(timesRun < end) {
	console.log(questions[timesRun]);
	timesRun++;
}

for(var timesRun = 0; timesRun < 4; timesRun++) {
	console.log("hey whattsup");
}























});











