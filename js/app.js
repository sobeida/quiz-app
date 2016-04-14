$(document).ready(function () {
    /*--- Questions Variable ---*/
    var questions = [
        //Question 1
        {
            question: 'Which subject does Melody Farrin teach?',
            options: ['Math', 'English', 'Geography', 'Anatomy'],
            answer: 1,
            correctDetails: 'English'
        },

        //Question 2
        {
            question: 'Who is the tallest of all the girls?',
            options: ['Misty', 'Esther', 'Johanna', 'Vanessa'],
            answer: 1,
            correctDetails: 'Esther'
        },

        //Question 3
        {
            question: 'What is the name of the place where all this is happening?',
            options: ['Waillims College', 'Zombie University', 'Ventana College', 'Upper Class University'],
            answer: 0,
            correctDetails: 'Waillims College'
        },

        //Question 4
        {
            question: 'What is the English favorite word of Melody?',
            options: ['Agastopia', 'Macrosmatic', 'Chatoyant', 'Valetudinarian'],
            answer: 2,
            correctDetails: 'Chatoyant'
        },

        //Question 5
        {
            question: 'What does the Spring Brake Outfit do?',
            options: ['Run faster', 'Jump higher', 'Decreases zombies', 'Increases health powers'],
            answer: 3,
            correctDetails: 'Increases health powers'
        },

        //Question 6
        {
            question: 'Where does Melody wake up without remembering how she got there?',
            options: ['Classroom', 'Backyard', 'Kitchen Floor', 'Bathroom Floor'],
            answer: 3,
            correctDetails: 'Bathroom Floor'
        },

        //Question 7
        {
            question: 'Who is the creator of Escape From Zombie U?',
            options: ['Alexis Moses', 'Raphael Caceres', 'Mario Barraza', 'Sobeida Lagrange'],
            answer: 2,
            correctDetails: 'Mario Barraza'
        },

        //Question 8
        {
            question: 'Who is the Principal of the school?',
            options: ['Joseph Luko', 'Misty', 'Ms. Rutherford', 'El Memo'],
            answer: 0,
            correctDetails: 'Joseph Luko'
        },

        //Question 9
        {
            question: 'Who was the very first Zombie?',
            options: ['Ms. Rutherford', 'Dr. Laenrendira', 'Joseph Luko', 'Fatima Gordon'],
            answer: 1,
            correctDetails: 'Dr. Laenrendira'
        },

        //Question 10
        {
            question: 'What does the Prom Night Outfit do?',
            options: ['Increases missils', 'It shoots fire', 'Nothing', 'Increases Health'],
            answer: 0,
            correctDetails: 'Increases missils'
        }
    ];

    var feedback = "Well Done";
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;
    $('.quiz-section').hide();
    $('.result-section').hide();

    function questionDisplay() {
        //displays the current question
        $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('.quiz-options').empty();
        var choiceTotal = questions[questionNum].options.length;
        for (var i = 0; i < choiceTotal; i++) {
            //loop thru the answer choices and create an dynamically generated row for each of them
            $('.quiz-options').append("<input type='radio' class='option' name='option' value=" + i + ">" + questions[questionNum].options[i] + "<br>");
        }
    }
    $('#startQuiz').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.intro-section').hide();
        $('.quiz-section').show();
        //empty the result details container
        $('#result_msg').empty();
        questionDisplay();
    });
    $('.quiz-section').on('click', '.option', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questions[questionNum].answer;
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<h3>Q: " + questions[questionNum].question + "</h3>");
        $('#result_msg').append("<h4>A: " + questions[questionNum].correctDetails + "</h4>");


        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {

            $('#show-score').text(correctTotal + "/" + questionTotal);

            //hide other "screens"
            $('.quiz-section').hide();
            $('.intro-section').hide();
            $('.result-section').show();
        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }

    });
    $('.result-section').on('click', '#startQuiz', function () {
        $('.intro-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });
});
