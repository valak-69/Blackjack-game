let cards=[];
let sum=0;
let message=""
let end=false;
let started=false;
let messEl=document.getElementById("message-el")
let cardEl=document.getElementById("card-el")
let sumEl=document.getElementById("sum-el")
function getRandom(){
    let rand=Math.ceil(Math.random()*13)
    if(21-sum===11 && rand==1){
        return 11;
    }
    if(rand>10){
        return 10;
    }else{
        return rand;
    }
}

function startGame(){
    if(!started){
        started=true;
    let card=getRandom()
    sum+=card
    cards=[card]
    renderGame()
    }
}
function renderGame(){
    cardEl.textContent="Cards: "
    for(let i=0; i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent= "Sum: " + sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }else if(sum>21){
        message="You're out of the game!"
        end=true;
        var lose =new Audio('lose.wav');
        lose.play();
    }else{
        message="You've got Blackjack!"
        end=true;
        var win =new Audio('win.wav');
        win.play();
    }
    messEl.textContent=message

}

function newCard(){
    if(!end && started){
        let next=getRandom()
        sum+=next
        cards.push(next)
        renderGame()
    }
    
}
function newGame(){
    cards=[];
    sum=0;
    message=""
    end=false;
    started=false;
    sumEl.textContent= "Sum: "
    cardEl.textContent="Cards: "
    messEl.textContent="Want to play a round?"
}