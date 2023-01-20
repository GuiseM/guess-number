const form = document.getElementById('form')
form.addEventListener('submit', handleSubmit);


let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');


const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function RandomValue() {
        return parseInt(Math.random() * this.max)
    }
}

const btnRestart = document.getElementById('btnRestart');
if(btnRestart){
    btnRestart.addEventListener('click', restart)
}

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};


function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert("Digite algum valor!")
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if (numberDrawn == kick) {
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick) {
        status.innerHTML = 'O número sorteado é maior!'
        status.style.color = '#eee'
        result.style.backgroundColor = '#de4251'
        attempt.style.color = '#ddd'
        result.style.transition = '0.4s';
        clear();
    } else {
        status.innerHTML = 'O número sorteado é menor!';
        status.style.color = '#eee';
        result.style.backgroundColor = '#de4251'
        attempt.style.color = '#ddd'
        result.style.transition = '0.4s';
        clear();
    }
};


function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = ''
}