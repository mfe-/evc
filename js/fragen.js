function get_random_quenstion(){
	question_id = 0;
	if(not_asked_questions.length >= 1){
		question_id = Math.floor((Math.random() * not_asked_questions.length ) % not_asked_questions.length)
	}

	current_question = not_asked_questions[question_id];
	asked_quenstions.push(current_question);
	
	not_asked_questions.splice(question_id,1);

	return current_question;
}

function show_next_question(){
	$('#answer_box').removeClass('correct')
	$('#answer_box').removeClass('incorrect')
	$('#btn_wrong').removeClass('hidden')
	$('#btn_right').removeClass('hidden')
	$('#next_question_box').addClass('hidden');
	$('#correct').addClass('hidden');
	$('#incorrect').addClass('hidden');
	show_random_question();
}

function show_random_question(){
	if(not_asked_questions.length > 0){
		question = get_random_quenstion();
		$("#question_box").text(question.question)
	}else{
		alert('keine Fragen mehr');
	}
}

function awnser_button(button){
	if((button == "btn_right" && current_question.is_correct == true) || (button == "btn_wrong" && current_question.is_correct == false)){
		$('#answer_box').addClass('correct')
		$('#correct').removeClass('hidden');
	}else{
		$('#incorrect').removeClass('hidden');
		$('#answer_box').addClass('incorrect')
	}

	if(current_question.is_correct == true){
		$('#btn_wrong').addClass('hidden');
	}else{
		$('#btn_right').addClass('hidden');
	}

	$('#next_question_box').removeClass('hidden');
}

function start_trainer(){
	show_questtions_from_first_test = $('#cb_first_test').is(':checked');
	show_questtions_from_second_test = $('#cb_second_test').is(':checked');

	if(show_questtions_from_first_test){
		not_asked_questions = not_asked_questions.concat(not_asked_questions_first_test);
	}
	if(show_questtions_from_second_test){
		not_asked_questions = not_asked_questions.concat(not_asked_questions_second_test);
	}

	if(show_questtions_from_first_test || show_questtions_from_second_test){
		$('#select_questions_container').addClass('hidden');	
		$('#question_container').removeClass('hidden');
		show_random_question();
	}
}
