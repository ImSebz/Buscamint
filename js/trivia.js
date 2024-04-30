const preguntas = [
    {
        "question": "¿Sufriste de dolor abdominal al menos 1 día por semana en los últimos 3 meses?",
        "options": [
            {
                "text": "Si",
                "points": 3
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question":'¿Tu dolor abdominal está asociado con al menos 2 de los siguientes síntomas?',
        "options": [
            {
                "text": "Si",
                "points": 3
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Sufriste de estreñimiento al menos 1 día por semana en los últimos 3 meses?",
        "options": [
            {
                "text": "Si",
                "points": 3
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Sufriste de hinchazón/inflamación en el estómago al menos 1 día por semana en los últimos 3 meses?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Sufriste de flatulencia (gases) al menos 1 día por semana en los últimos 3 meses?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Ha tenido el abdomen hinchado, tenso o distendido recientemente?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Cambió la consistencia de las heces (diarrea, estreñimiento o ambos), desde que notaste problemas digestivos (hinchazón abdominal, gases, dolor abdominal) por primera vez?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Cambió el número de deposiciones desde que notaste los síntomas digestivos?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Has estado sometido/a a situaciones estresantes en los últimos meses?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    },
    {
        "question": "¿Ha tenido que restringir su dieta debido a sus problemas digestivos?",
        "options": [
            {
                "text": "Si",
                "points": 1
            },
            {
                "text": "No",
                "points": 0
            }
        ]
    }
];

//Counters
let pointsCounter = 0;
let currentQuestionIndex = 0;

//HTML Elements
const questionP = document.querySelector('.question-p');
const questionContainer = document.querySelector('.question-container');
const imgQuestionContainer = document.querySelector('.img-question-container');
const anwsersContainer = document.querySelector('.anwsers-container');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const body = document.querySelector('body');
const optionP = document.querySelector('.option-p');
const triviaLogo = document.querySelector('.trivia-logo');
const options = document.querySelector('.options');


const displayQuestion = () => {
    const currentQuestion = preguntas[currentQuestionIndex];
    questionP.innerText = currentQuestion.question;
    const createImg = document.createElement('img');

    // Asignar imagen a la pregunta
    createImg.src = `assets/trivia_${currentQuestionIndex + 1}.png`;
    imgQuestionContainer.innerHTML = '';
    imgQuestionContainer.appendChild(createImg);

    // Asignar puntos a los botones
    btnYes.dataset.points = currentQuestion.options[0].points;
    btnNo.dataset.points = currentQuestion.options[1].points;
};

const handleClick = (event) => {
    imgQuestionContainer.style = 'display: flex';
    options.style = 'display: none';
    pointsCounter += Number(event.target.dataset.points);
    currentQuestionIndex++;

    if ( currentQuestionIndex === 1) {
        imgQuestionContainer.style = 'display: none';
        options.style = 'display: flex';
    }


    if (currentQuestionIndex < preguntas.length) {
        displayQuestion();
    }
    else {
        if (pointsCounter >= 8) {
            imgQuestionContainer.style = 'display: none';
            anwsersContainer.style = 'display: none';
            questionContainer.style = 'display: none';
            triviaLogo.style = 'justify-content: center; margin-top: 5%;';
            body.style = 'background: url(./assets/trivia_bg_option1.jpg); background-size: 100% 100%; background-repeat: no-repeat;';
            optionP.innerHTML = '<strong>Tus síntomas pueden ser típicos del SII (Síndrome del Intestino Irritable).</strong><br> Por lo tanto, es importante que discutas estos síntomas y cualquier otro que puedas estar experimentando con tu médico.';
        }

        else {
            imgQuestionContainer.style = 'display: none';
            anwsersContainer.style = 'display: none';
            questionContainer.style = 'display: none';
            triviaLogo.style = 'visibility: hidden;';
            body.style = 'background: url(./assets/trivia_bg_option2.jpg); background-size: 100% 100%; background-repeat: no-repeat;';
            optionP.innerHTML = '<strong>Tus síntomas pueden no ser típicos del SII (Síndrome de Intestino Irritable).</strong><br>Si no experimentas dolor abdominal recurrente en combinación con movimientos intestinales anormales (estreñimiento y/o diarrea), es posible que no tengas SII. Si tus síntomas persisten y/o empeoran, consulta a tu médico';
        }
    
        // setTimeout(() => {
        //     pointsCounter = 0;
        //     currentQuestionIndex = 0;
        //     btnYes.style = '';
        //     btnNo.style = '';
        //     window.location.href = 'index.html';
        // }, 20000);
    }
};

btnYes.addEventListener('click', handleClick);
btnNo.addEventListener('click', handleClick);

displayQuestion();

