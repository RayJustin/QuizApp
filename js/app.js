$(document).ready(function(){

	var questions = [
	{
		title: 'What percentage of the energy produced in the U.S.A comes from fossil fuels?',
		answers:  ['50%','85%','30%','12%'],
		correct: 1
	},
	{
		title: 'Which is the most adundant air pollutant?',
		answers:  ['Nitrogen Oxides','Sulfur Dioxide','Carbon Monoxide','Carbon Dioxide'],
		correct: 3
	},
	{
		title: 'What is the correct arrangement of an ecological heirarchy from smallest to largest?',
		answers:  ['Individuals, Community, Population, Ecosystem','Individuals, Population, Ecosystem, Community','Individuals, Population, Community, Ecosystem','Population, Individual, Community, Ecosystem'],
		correct: 2
	},
	{
		title: 'Plant species can be categorized into what group?',
		answers:  ['Producers','Omnivores','Consumers','Detritivores'],
		correct: 0
	},
	{
		title: 'What happens to a predator population if the prey population declines?',
		answers:  ['The predator population will grow','The predator population will decline as well','The predator population will stay the same','The predators will have a party'],
		correct: 1
	}
	];

var currentquestion = 0;
var score = 0;

showQuestion();


$('body').on('click','.next', function(){
	var guess = $('input:checked').val();
	var question = questions[currentquestion];
	if (guess == question.correct){
		score++;
		$('.questionButtons li:nth-child('+ (currentquestion + 1) +')').addClass('correct');
	}
	else {
		$('.questionButtons li:nth-child('+ (currentquestion + 1) + ')').addClass('incorrect');
	}
	currentquestion++;
	showQuestion();
});


$('body').on('click','.restart', function(){
	currentquestion = 0;
	score = 0;
	$('.questionButtons li').removeClass('correct').removeClass('incorrect');
	$('.restart').removeClass('restart').addClass('next').text('Next');
	$('.answers').removeClass('results');
	showQuestion();
});

function showQuestion() {
	if (currentquestion < questions.length) {
		var question = questions[currentquestion];
		$('.questions h2').text("Question " + (currentquestion + 1));
		$('.questions p').text(question.title);
		$('.answers').text('');
		for (i = 0; i < question.answers.length; i++){
			var ans = '<li><input type="radio" name="radanswer" value="'+i+'" id="'+i+'"><label for="'+i+'">'+question.answers[i]+'</label></li>';
			$('.answers').append(ans);
			}
		}
	else {
		showResults();
	}
}

function showResults() {
	$('.questions h2').text("Quiz Complete!");
	$('.questions p').text('');
	$('.answers').addClass('results').html("You got " + score + " out of " + questions.length + " correct!");
	$('.next').text('Retry').removeClass('next').addClass('restart');
}

});