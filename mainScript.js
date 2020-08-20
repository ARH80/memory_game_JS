document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var lastId = null
    var chosenCard = []
    var chosenCardId = []
    var wonCards = []

    function createGameBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        if(cardId !== lastId && !isWon(cardArray[cardId].name)) {
            chosenCard.push(cardArray[cardId].name)
            chosenCardId.push(cardId)
            this.setAttribute('src',cardArray[cardId].img)
        }
        if(chosenCard.length === 2) {
            setTimeout(checkSame, 1000)
        }
        lastId = cardId
    }

    function checkSame() {
        var cards = document.querySelectorAll('img')
        const firstCardId = chosenCardId[0]
        const secondCardId = chosenCardId[1]
        if(chosenCard[0] === chosenCard[1]) {
            cards[firstCardId].setAttribute('src','images/white.png')
            cards[secondCardId].setAttribute('src','images/white.png')
            wonCards.push(chosenCard)
            //alert('Hurray! You matched two cards')
        } else {
            cards[firstCardId].setAttribute('src','images/blank.png')
            cards[secondCardId].setAttribute('src','images/blank.png')
            //alert('Sorry, try again...')
        }
        chosenCard = []
        chosenCardId = []
        lastId = null
        resultDisplay.textContent = wonCards.length
        if (wonCards.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You Won...'
        }
    }

    function isWon(cardName) {
        for(let i = 0; i < wonCards.length; i++) {
            if(wonCards[i][0] === cardName) {
                return true
            }
        }
        return false
    }

    createGameBoard()

})