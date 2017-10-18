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
$("#trivia-questions").hide();
$("#questions-results").hide();
var questions = [{
	    question: "Who was 'Micheal Myers' first victim at age 6??",
	    choices: ["His Mother", "His Sister","His Teacher", "The Town Sheriff"],
	    answer: 1,
	},{
		question: "Ghostface's mask in Scream is based on a painting by which famous artist?",
		choices: ["Edouard Manet", "Andy Warhol", "Edvard Munch", "Claude Monet"],
		answer: 2,
	},{
		question: "What was used for blood in the movie 'Psycho'?",
		choices: ["Catups", "Corn syrup and Food coloring"," Chocolate Syrup"," Real Blood"],
		answer: 2,
		video: "",
	},{
		question: "In the movie 'The Omen', who hangs themselves at Damien's fifth birthday party?",
		choices: ["His brother"," His Nanny"," His Priest", "His Mother"],
		answer: 1,
	},{
		question: "In the movie 'saw', what part of the body did the character had to imputate to escape in the end?",
		choices: ["His Left Hand", "His Left foot"," His Right Hand"," His Right foot"],
		answer: 3,
	}
];
var pageCount;
var qPageTime = 30;
var timer = 5;
var i = 0;
var correct= 0
var incorrect= 0
var intervalId;
//you have to display correct and incorrect to html 67-61
//create a function to show result page after the last question

//start button to begin
function startGame(){
	$("#start-btn").on("click",function() {
		$("#start").hide();
		$("#trivia-questions").show();
		displayQuestions(i)
	});
}
startGame()	
//function to display questions [i] is to run through all of the questions for the global i variable
function displayQuestions(i) {
	$("#questions").html(questions[i].question)
	$("#choice0").html(questions[i].choices[0])
	$("#choice1").html(questions[i].choices[1])
	$("#choice2").html(questions[i].choices[2])
	$("#choice3").html(questions[i].choices[3])
}
//timer function
function qTimer() {
	timer--;
	$("#timer").html(timer)
	if (timer === 0){
		i++;
		$("#timer").html(timer)
		if(i >= questions.length){
			console.log("game over")
			//show result page when all of the questions are asked
			$("#start").hide();
			$("#trivia-questions").hide();
			$("#questions-results").show();
		}
		displayQuestions(i)
		timer=5
	}
}
//trying to move to the next question
//stop time
function stop(){
      clearInterval(intervalId);
 }

setInterval(qTimer, 1000)
//logging in right answers
function answer(i) {
	$("button").on("click", function() {
		if(questions ){
			correct++
			console.log("you are correct")

		}
		console.log(this)
	});
}
answer(i);
//-------------------------------------now grab the result when click on button 
//result button
//show result id
//function nextQ(){
//for ( var i = 0; i <questions.length; i++ ){
// 		displayQuestions(i)
// 	}
// }

 	
//when "start" button is clicked
// function startGame(){

// }
//1. a timeer of 30 seconds goes off
//2. a question is on display for that one question
//3. after clicking an answer it'll let the user know if the question answered was wrong or right
//4.if no user input , "says out of time" and continue on.
//the next question would cycle in.
//repeat step 1-4 until game over
//after all the questions were answer it will show how many answer the user got wrong and right.
//click start over, it does not reload the page but "reset" the game instead.
//good luck


// var timesRun=0;
// // questions.shuffle();

// // var end = questions.length;

// while(timesRun > end) {
// 	console.log(questions[timesRun]);
// // 	timesRun++;
// }

// for(var timesRun = 0; timesRun < 4; timesRun++) {
// 	console.log("hey whattsup");
// }























});











