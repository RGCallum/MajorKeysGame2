const cardsArray = [
    {
        name: 'cigar',
        img: 'img/cigar.png',
    },
    {
        name: 'beats',
        img: 'img/beats.png',
    },
    {
        name: 'car',
        img: 'img/car.png',
    },
    {
        name: 'blkSlides',
        img: 'img/blkSlides.png',
    },
    {
        name: 'yacht',
        img: 'img/yacht.png',
    },
    {
        name: 'djkJumpman',
        img: 'img/djkJumpman.png',
    },
    {
        name: 'horseback',
        img: 'img/horseback.png',
    },
    {
        name: 'cherub',
        img: 'img/cherub.png',
    },
    {
        name: 'massage',
        img: 'img/massage.png',
    },
    {
        name: 'miami',
        img: 'img/miami.png',
    },
    {
        name: 'money',
        img: 'img/money.png',
    },
    {
        name: 'prayerHands',
        img: 'img/prayerHands.png',
    },
];



let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

var aud = document.getElementById('audio2');

function enableMute() {
    aud.muted = true;
    document.getElementById('mute').style.backgroundColor = 'rgba(169, 255, 186, 0.563)';
    document.getElementById('unmute').style.backgroundColor = 'transparent';

}

function disableMute() {
    aud.muted = false;
    document.getElementById('unmute').style.backgroundColor = 'rgba(169, 255, 186, 0.563)';
    document.getElementById('mute').style.backgroundColor = 'transparent';

}

function mySoundsSuccess() {
    var x = Math.floor((Math.random() * 6) + 1);
    var sound = new Audio();
    switch (x) {
        case 1:
            sound.src = "/audio/WeDaBest1.mp3";
            break;
        case 2:
            sound.src = "/audio/YouSmart.mp3";
            break;
        case 3:
            sound.src = "/audio/You Very Smart.mp3";
            break;
        case 4:
            sound.src = "/audio/YouAGenius.mp3";
            break;
        case 5:
            sound.src = "/audio/YouLoyal.mp3";
            break;
        case 6:
            sound.src = "/audio/I Appreciate You.mp3";
            break;

    }
    sound.play();
}

function mySoundsWrong() {
    var x = Math.floor((Math.random() * 6) + 1);
    var sound = new Audio();
    switch (x) {
        case 1:
            sound.src = "/audio/Congratulations You Played Yourself.mp3";
            break;
        case 2:
            sound.src = "/audio/NeverGiveUp.mp3";
            break;
        case 3:
            sound.src = "/audio/They Never Said Winning Was Easy.mp3";
            break;
        case 4:
            sound.src = "/audio/You Think Its A Game Huh.mp3";
            break;
        case 5:
            sound.src = "/audio/AnotherOnePause.mp3";
            break;
        case 6:
            sound.src = "/audio/Some People Cant Handle Success.mp3";
            break;

    }
    sound.play();
}


let firstGuess = '';
let secondGuess = '';
let count = 0;
let score = 0;
let lives = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

const match = () => {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
}

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', function (event) {
    let clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
                score += 1000;
                lives += 1;
                document.getElementById("lives").innerHTML = lives + " 🗝";
                document.getElementById("score").innerHTML = score;
                document.getElementById('audio1').play();
                mySoundsSuccess();



            } else {
                setTimeout(resetGuesses, delay);
                document.getElementById('audio2').play();
                audio2.volume = 0.2;
                mySoundsWrong();


            }

            if (score === 12000) {
                document.getElementById('iGotKeys').play();

            }

        }
        previousTarget = clicked;


    }
});




