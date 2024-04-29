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
        "question":`¿Tu dolor abdominal está asociado con al menos 2 de los siguientes síntomas?\n\na) Dolor relacionado al defecar.\nb) Cambio en la frecuencia de defecación.\nc) Cambio en la apariencia de tus heces`,
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
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

const displayQuestion = () => {
    const currentQuestion = preguntas[currentQuestionIndex];
    questionP.innerText = currentQuestion.question;

    // Asignar puntos a los botones
    btnYes.dataset.points = currentQuestion.options[0].points;
    btnNo.dataset.points = currentQuestion.options[1].points;
};

const handleClick = (event) => {
    pointsCounter += Number(event.target.dataset.points);
    currentQuestionIndex++;
    if (currentQuestionIndex < preguntas.length) {
        displayQuestion();
    }
    else {
        if (pointsCounter >= 8) {
            questionP.innerText = 'Tus síntomas pueden ser típicos del SII (Síndrome del Intestino Irritable). Por lo tanto, es importante que discutas estos síntomas y cualquier otro que puedas estar experimentando con tu médico.';
        }

        else {
            questionP.innerText = 'Tus síntomas pueden no ser típicos del SII (Síndrome de Intestino Irritable). Si no experimentas dolor abdominal recurrente en combinación con movimientos intestinales anormales (estreñimiento y/o diarrea), es posible que no tengas SII. Si tus síntomas persisten y/o empeoran, consulta a tu médico';
        }
        btnYes.style = 'display: none';
        btnNo.style = 'display: none';

        setTimeout(() => {
            pointsCounter = 0;
            currentQuestionIndex = 0;
            btnYes.style = '';
            btnNo.style = '';
            displayQuestion();
        }, 15000);
    }
};

btnYes.addEventListener('click', handleClick);
btnNo.addEventListener('click', handleClick);

displayQuestion();

