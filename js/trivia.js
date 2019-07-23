(function () {
    var questions = [{
        question: "Which team one the 2019 NBA Championship?",
        choices: [' Golden State Warriors', " Toronto Raptors", " New York Knicks", " Cleveland Cavaliers"],
        correctAnswer: 1
    }, {
        question: "Where did Childish Gambino get his stage name from?",
        choices: [" Pharell", " Guava Island", " Gambino Crime Family", " WuTang Generator"],
        correctAnswer: 3
    }, {
        question: "What NBA team went on a 17 game losing streak in the 2018-2019 season?",
        choices: [" NY Knicks", " Atlanta Hawks", " LA Clippers", "  Miami Heat"],
        correctAnswer: 0
    }, {
        question: "Who is the highest paid female musician in 2019?",
        choices: [" Beyonce", " Katy Perry", " Taylor Swift", " Rihanna"],
        correctAnswer: 3
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 64, 50],
        correctAnswer: 2
    }];


    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var quesElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        quesElement.append(header);

        var question = $('<p>').append(questions[index].question);
        quesElement.append(question);

        var radioButtons = createRadios(index);
        quesElement.append(radioButtons);

        return quesElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);

            if (input.answer === questions.correctAnswer) {
                document.getElementById('audio1').play();
                console.log("idk");
            }

        }
        return radioList;
        
    }


    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();

    }
    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function () {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', { id: 'question' });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
                // document.getElementById('audio1').play();
                // console.log("wtf");
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            questions.length + ' right!!!');
        return score;
    }
})();

