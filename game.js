let arrCards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10,
    10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14];
let stackOfCardsP1 = new Array();
let stackOfCardsP2 = new Array();
let firstPlayerButton = document.getElementById('players1button');
let secondPlayerButton = document.getElementById('players2button');
let cardImgP1 = document.getElementById('slider1');
let cardImgP2 = document.getElementById('slider2');
let tcardOnFieldP1 = false;
let tcardOnFieldP2 = false;


let cardsOfPlayer1 = function sortCardsPlayer1() {
    let cardsOfPlayer1 = new Array();
    let i = 0;
    while (i < 26) {
        let cardNumber = Math.floor((Math.random() * arrCards.length));
        cardsOfPlayer1[i] = arrCards[cardNumber];
        stackOfCardsP1[i] = arrCards[cardNumber];
        arrCards.splice(cardNumber, 1);
        i++;
    }
};

let cardsOfPlayer2 = function sortCardsPlayer2() {
    let cardsOfPlayer2 = new Array();
    let i = 0;
    while (i < 26) {
        let cardNumber = Math.floor((Math.random() * arrCards.length));
        cardsOfPlayer2[i] = arrCards[cardNumber];
        stackOfCardsP2[i] = arrCards[cardNumber];
        arrCards.splice(cardNumber, 1);
        i++;
    }

};
cardsOfPlayer1();
cardsOfPlayer2();

firstPlayerButton.onclick = cardOnFieldP1;
secondPlayerButton.onclick = cardOnFieldP2;


function cardOnFieldP1() {
    if (stackOfCardsP1.length === 1) {
        let h = document.getElementById('h2');
        h.append('Player2 has won!');
    }
    if (tcardOnFieldP1 === true && tcardOnFieldP2 === true) {
        compareCards();
    }
    let field = document.querySelector('#cardP1');
    let card = `Power: ${stackOfCardsP1[0]}`;
    if (tcardOnFieldP1 === false) {
        field.append(card);
        cardImgP1.src = `img/${stackOfCardsP1[0]}.png`
        field.append(cardImgP1);
    }
    tcardOnFieldP1 = true;


}


function cardOnFieldP2() {
    if (stackOfCardsP2.length === 1) {
        let h = document.getElementById('h2');
        h.append('Player1 has won!');
    }
    if (tcardOnFieldP1 === true && tcardOnFieldP2 === true) {
        compareCards();
    }

    let card = `Power: ${stackOfCardsP2[0]}`;
    let field = document.querySelector('#cardP2');
    if (tcardOnFieldP2 === false) {
        field.append(card);
        cardImgP2.src = `img/${stackOfCardsP2[0]}.png`
        field.append(cardImgP2);
    }
    tcardOnFieldP2 = true;


}

function compareCards() {
    let field1 = document.querySelector('#cardP1');
    let field2 = document.querySelector('#cardP2');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let equalsInfo1 = document.getElementById('equals1');
    let equalsInfo2 = document.getElementById('equals2');
    equalsInfo1.innerHTML = '';
    equalsInfo2.innerHTML = '';

    if (stackOfCardsP1[0] > stackOfCardsP2[0]) {
        stackOfCardsP1.push(stackOfCardsP2[0]);
        stackOfCardsP1.push(stackOfCardsP1[0]);
        stackOfCardsP1.shift();
        stackOfCardsP2.shift();
        //   let value = stackOfCardsP1[stackOfCardsP1.length - 1]; // проверка
        field1.innerHTML = '';
        field2.innerHTML = '';
        p1.innerHTML = '';
        p2.innerHTML = '';
        p1.append(`Cards: ${stackOfCardsP1.length}`); // проверка
        p2.append(`Cards: ${stackOfCardsP2.length}`);
        tcardOnFieldP1 = false;
        tcardOnFieldP2 = false;
        return;

    }
    if (stackOfCardsP1[0] < stackOfCardsP2[0]) {
        stackOfCardsP2.push(stackOfCardsP1[0]);
        stackOfCardsP2.push(stackOfCardsP2[0]);
        stackOfCardsP1.shift();
        stackOfCardsP2.shift();
        field1.innerHTML = '';
        field2.innerHTML = '';
        p1.innerHTML = '';
        p2.innerHTML = '';
        p1.append(`Cards: ${stackOfCardsP1.length}`); // проверка
        p2.append(`Cards: ${stackOfCardsP2.length}`);
        tcardOnFieldP1 = false;
        tcardOnFieldP2 = false;
        return;

    }

    if (stackOfCardsP1[0] === stackOfCardsP2[0]) {
        compareEquels();
    }
    tcardOnFieldP1 = false;
    tcardOnFieldP2 = false;
}

function compareEquels() {
    let field1 = document.querySelector('#cardP1');
    let field2 = document.querySelector('#cardP2');
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');
    let equalsInfo1 = document.getElementById('equals1');
    let equalsInfo2 = document.getElementById('equals2');
    let i = 0;
    let tmpArr = new Array();

    while (stackOfCardsP1[i] == stackOfCardsP2[i]) {
        tmpArr = tmpArr.concat([stackOfCardsP1[i], stackOfCardsP2[i]]);
        i++;
    }

    if (stackOfCardsP1[i] > stackOfCardsP2[i]) {
        field1.innerHTML = '';
        field2.innerHTML = '';
        p1.innerHTML = '';
        p2.innerHTML = '';
        equalsInfo1.append(`Your current card is bigger and it is ${stackOfCardsP1[i]}`);
        equalsInfo2.append(`Your current card is smaller and your current card is ${stackOfCardsP2[i]}`);
        stackOfCardsP1.splice(0, i);
        stackOfCardsP2.splice(0, i);
        stackOfCardsP1 = stackOfCardsP1.concat(tmpArr);
        p1.append(`Cards: ${stackOfCardsP1.length}`); // проверка
        p2.append(`Cards: ${stackOfCardsP2.length}`);
        return;
    }
    if (stackOfCardsP1[i] < stackOfCardsP2[i]) {
        field1.innerHTML = '';
        field2.innerHTML = '';
        p1.innerHTML = '';
        p2.innerHTML = '';
        equalsInfo1.append(`Your current card is smaller and it is ${stackOfCardsP1[i]}`);
        equalsInfo2.append(`Your current card is bigger and it is ${stackOfCardsP2[i]}`);
        stackOfCardsP1.splice(0, i);
        stackOfCardsP2.splice(0, i);
        stackOfCardsP2 = stackOfCardsP2.concat(tmpArr);
        p1.append(`Cards: ${stackOfCardsP1.length}`); // проверка
        p2.append(`Cards: ${stackOfCardsP2.length}`);
        return;
    }
    equalsInfo1.innerHTML = '';
    equalsInfo2.innerHTML = '';
    tcardOnFieldP1 = false;
    tcardOnFieldP2 = false;


}


// p

// let cardsCount = document.querySelector('#cardsCount');
// let p1Text = document.createTextNode(`You have ${cardsOfPlayer1().length} Cards`);
// cardsCount.append(p1Text);
