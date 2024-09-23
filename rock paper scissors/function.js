import checkFunctionality from "./control.js";






let player = {};//for card effects
let opponent = {};

let playerlife = {};//for card effects  
let opponentlife = {};













export function rock() { //rock function should cause the opponent to lose 2 life
    opponentlife = opponentlife - 2;
    checkFunctionality();
   }

export function paper() { //paper function should stop 2 damage
    //todo
}


export function scissors() { //scissors function should deal one damage and discard a card
    //todo
}