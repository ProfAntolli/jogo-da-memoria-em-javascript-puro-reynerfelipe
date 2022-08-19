const card = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.toggle('flip');

    if(!hasFlipperCard){
        hasFlipperCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipperCard = false;

    checkForMath()
}
function checkForMath()
{if(firstCard.dataset.card === secondCard.dataset.card){
    disableCards();
    return;
}

    unflipCards();

}
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
 }, 1500);
}

function resetBoard(){
    [hasFlipperCard , lockBoard] = [false, false];
    [firstCard , secondCard] = [null, null];
}


(function shuffle(){
    card.forEach((card) => {
        let randownPosition = Math.floor(Math.random() * 12);
        card.style.order = randownPosition;
    })

})();

card.forEach((card) => {
    card.addEventListener('click', flipCard)
});

