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


const game = document.getElementById('game')

const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

game.appendChild(grid)

// For each item in the cardsArray array...
cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
  })