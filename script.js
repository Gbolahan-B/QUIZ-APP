//This entire code was written by Gbolahan Bantefa. All right reserved//
const originalQuizData = [
    {
        question: "Where do you get the meaning of words used in a book?",
        answers: [
            { text: "Table of contents", correct: false },
            { text: "Glossary", correct: true },
            { text: "Index", correct: false },
            { text: "Title page", correct: false }
        ]
    },
    {
        question: "Where can you find information about the publisher and copyright date of a book?",
        answers: [
            { text: "Cover page", correct: false },
            { text: "Verso", correct: true },
            { text: "Table of contents page", correct: false },
            { text: "Recto", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT true about the table of contents page?",
        answers: [
            { text: "The table of contents has the page number where each chapter begins.", correct: false },
            { text: "The table of contents has the title of each chapter listed and the chapter number", correct: false },
            { text: "The table of contents has details of every chapter with the page number.", correct: true },
            { text: "None of the above.", correct: false }
        ]
    },
    {
        question: "The main functions of the library include the following, EXCEPT?",
        answers: [
            { text: "Selecting", correct: false },
            { text: "Acquiring", correct: false },
            { text: "Branding", correct: true },
            { text: "Organizing", correct: false }
        ]
    },
    {
        question: "What is the feature of a table of contents?",
        answers: [
            { text: "List chapters as contained in a book.", correct: false },
            { text: "List chapters with pages of the book.", correct: false },
            { text: "List chapters with pages as contained in a book.", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Materials that contain sight and sound:",
        answers: [
            { text: "Audio", correct: false },
            { text: "Visual", correct: false },
            { text: "Pamphlet", correct: false },
            { text: "Audiovisual", correct: true }
        ]
    },
    {
        question: "DDC has __________ main classes?",
        answers: [
            { text: "12", correct: false },
            { text: "26", correct: false },
            { text: "20", correct: false },
            { text: "10", correct: true }
        ]
    },
    {
        question: "Due dates stamped on a borrowed library material indicate",
        answers: [
            { text: "when the book is purchased", correct: false },
            { text: "when the book is to be returned", correct: true },
            { text: "when the book is borrowed", correct: false },
            { text: "when the book is published", correct: false }
        ]
    },
    {
        question: "Library of Congress uses _____________ alphabets",
        answers: [
            { text: "21", correct: true },
            { text: "28", correct: false },
            { text: "23", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "Charging and discharging of library materials is carried out at ___________",
        answers: [
            { text: "Porter desk", correct: false },
            { text: "Duck desk", correct: false },
            { text: "Circulation desk", correct: true },
            { text: "circulatory desk", correct: false }
        ]
    },
    {
        question: "_________________is a book containing the words of a language, or the terms of a subject and concepts; their meanings, usage, pronunciation and etymology.",
        answers: [
            { text: "Atlas", correct: false },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: true },
            { text: "Almanac", correct: false }
        ]
    },
    {
        question: "The subject takes precedent in",
        answers: [
            { text: "Author catalogue", correct: false },
            { text: "Subject catalogue", correct: true },
            { text: "Title catalogue", correct: false },
            { text: "Shelf-list catalogue", correct: false }
        ]
    },
    {
        question: "_____________are materials published by local, state and federal governmental bodies and agencies.",
        answers: [
            { text: "Atlas", correct: false },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Government publications", correct: true }
        ]
    },
    {
        question: "____________ is a collection of maps and plates or charts, which provide geographical information about places.",
        answers: [
            { text: "Atlas", correct: true },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Almanac", correct: false }
        ]
    },
    {
        question: "_____________ is a systematic list of publications, on a given subject or by a given author, in a particular geographical area, over a particular time.",
        answers: [
            { text: "Alas", correct: false },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Bibliography", correct: true }
        ]
    },
    {
        question: "_____________contain vital information about an organization’s telephone, fax and e-mail numbers.",
        answers: [
            { text: "Atlas", correct: false },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Directory", correct: true }
        ]
    },
    {
        question: "_________________material provides summaries of publication.",
        answers: [
            { text: "Abstract", correct: true },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Bibliography", correct: false }
        ]
    },
    {
        question: "_________________are publications issued at regular intervals.",
        answers: [
            { text: "Government publications", correct: false },
            { text: "Encyclopedia", correct: false },
            { text: "Dictionary", correct: false },
            { text: "Serials", correct: true }
        ]
    },
    {
        question: "___________________ is a well-planned reading whose aim is to capture and assimilate every necessary detail in a.",
        answers: [
            { text: "reading", correct: false },
            { text: "researching", correct: false },
            { text: "studying", correct: true },
            { text: "learning", correct: false }
        ]
    },
    {
        question: "Dictionary and encyclopedia are arranged in ___________________________ order.",
        answers: [
            { text: "Numerical", correct: false },
            { text: "Alphabetical", correct: true },
            { text: "Alpha-numerical", correct: false },
            { text: "Chorological", correct: false }
        ]
    },
    {
        question: "Which reference sources would you use to find out the best fishing days in the year?",
        answers: [
            { text: "Atlas", correct: false },
            { text: "encyclopedia", correct: true },
            { text: "dictionary", correct: false },
            { text: "bibliography", correct: false }
        ]
    },
    {
        question: "Which reference would you use to learn more about Nigerian vegetation, boundaries, etc.?",
        answers: [
            { text: "Atlas", correct: true },
            { text: "encyclopedia", correct: false },
            { text: "dictionary", correct: false },
            { text: "bibliography", correct: false }
        ]
    },
    {
        question: "____________ is a systematic arrangement of objects, ideas, books and other items which have like qualities or characteristics?",
        answers: [
            { text: "Cataloguing", correct: false },
            { text: "Shelf-reading", correct: false },
            { text: "Shelving", correct: false },
            { text: "Classification", correct: true }
        ]
    },
    {
        question: "Library catalogue provides ________________ to the library holdings?",
        answers: [
            { text: "call no", correct: false },
            { text: "Information", correct: false },
            { text: "Access", correct: true },
            { text: "Number", correct: false }
        ]
    },
    {
        question: "_____________ section is concerned with the selection and purchase of reading materials",
        answers: [
            { text: "Circulation", correct: false },
            { text: "Readers’ services", correct: false },
            { text: "Serials", correct: false },
            { text: "Acquisition", correct: true }
        ]
    }
];

let quizData = [];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const questionTextElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTextElement = document.getElementById('feedback-text');
const navigationContainer = document.getElementById('navigation-container');
const scoreTextElement = document.getElementById('score-text');
const nextButton = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const finalScoreTextElement = document.getElementById('final-score-text');
const finalPercentageTextElement = document.getElementById('final-percentage-text');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');

let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;
let answerSelected = false;
let questionsAnsweredThisTurn = false;

const QUESTIONS_PER_QUIZ = 20;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    let shuffledOriginalData = [...originalQuizData];
    shuffleArray(shuffledOriginalData);

    quizData = shuffledOriginalData.slice(0, Math.min(shuffledOriginalData.length, QUESTIONS_PER_QUIZ));

    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    answerSelected = false;
    questionsAnsweredThisTurn = false;

    resultsContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    feedbackContainer.classList.remove('hidden');
    navigationContainer.classList.remove('hidden');
    feedbackTextElement.textContent = '';
    nextButton.textContent = ' Next ';
    nextButton.disabled = true;
    updateScoreDisplay();
    updateProgressBar();
    showQuestion();
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionTextElement.textContent = currentQuestion.question;

        const shuffledAnswers = [...currentQuestion.answers];
        shuffleArray(shuffledAnswers);

        shuffledAnswers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
        nextButton.disabled = true;
        answerSelected = false;
        questionsAnsweredThisTurn = false;
    } else {
        showResults();
    }
}

function resetState() {
    feedbackTextElement.textContent = '';
    feedbackTextElement.className = 'feedback-text';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    if (answerSelected) return;

    answerSelected = true;
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (!questionsAnsweredThisTurn) {
        questionsAnswered++;
    }
    questionsAnsweredThisTurn = true;


    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        feedbackTextElement.textContent = "Correct!";
        feedbackTextElement.className = 'feedback-text text-green-600';
    } else {
        selectedButton.classList.add('incorrect');
        feedbackTextElement.textContent = "Incorrect!";
        feedbackTextElement.className = 'feedback-text text-red-600';
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add('correct');
            }
        });
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });

    updateScoreDisplay();
    updateProgressBar();
    nextButton.disabled = false;

    if (quizData.length > currentQuestionIndex + 1) {
        nextButton.textContent = ' Next ';
    } else {
        nextButton.textContent = 'Results';
    }
}

function updateScoreDisplay() {
    scoreTextElement.textContent = `Current score: ${score} / ${questionsAnswered}`;
}

function updateProgressBar() {
    if (quizData.length === 0) {
        progressBar.style.width = '0%';
        return;
    }
    const presentedQuestions = currentQuestionIndex + (answerSelected || questionsAnsweredThisTurn ? 1 : 0);
    const progressPercentage = (presentedQuestions / quizData.length) * 100;
    progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
}


function showResults() {
    questionContainer.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    navigationContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const totalQuestionsInQuiz = quizData.length;
    const percentage = (totalQuestionsInQuiz > 0 ? (score / totalQuestionsInQuiz) * 100 : 0);
    finalScoreTextElement.textContent = `Quiz Complete: ${score} out of ${totalQuestionsInQuiz} question  passed.`;
    finalPercentageTextElement.textContent = `Percentage: ${percentage.toFixed(1)}%`;
    finalPercentageTextElement.className = 'text-3xl font-bold mb-6';
    if (percentage >= 70) {
        finalPercentageTextElement.classList.add('text-green-600');
    } else if (percentage >= 40) {
        finalPercentageTextElement.classList.add('text-yellow-500');
    } else {
        finalPercentageTextElement.classList.add('text-red-600');
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        if (!answerSelected && !questionsAnsweredThisTurn && currentQuestionIndex === quizData.length - 1) {
            questionsAnsweredThisTurn = true;
        }
        updateProgressBar();
        showResults();
    }
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
