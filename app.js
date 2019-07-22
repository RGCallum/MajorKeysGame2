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
]

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200




const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
  });
  
  const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.add('match')
    })
  };

  const resetGuesses = () => {
    firstGuess = ''
    secondGuess = ''
    count = 0
  
    var selected = document.querySelectorAll('.selected')
    selected.forEach(card => {
      card.classList.remove('selected')
    })
  };

grid.addEventListener('click', function(event) {
    let clicked = event.target;
      if (clicked.nodeName === 'SECTION' || clicked === previousTarget ) {
      return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add('selected');
          } else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add('selected');
          }
          if (firstGuess !== '' && secondGuess !== '') {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay)
                setTimeout(resetGuesses, delay)
              } else {
                setTimeout(resetGuesses, delay)
              }         

          }
          previousTarget = clicked;

      }
  
  });

