//Referencias HTML
const btnLanding = document.getElementById('btn-landing');


btnLanding.addEventListener('click', () => {

    setTimeout(() => {
        window.location.href = 'trivia.html';
    }, 500);

});