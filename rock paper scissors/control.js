//this is for all the functions for the rock paper scissors game


import {rock} from "./function.js";
import {paper} from "./function.js";
import {scissors} from "./function.js";





let player1 = {};// the player objects
let player2 = {};

let player1Life = 10;// the life of the players
let player2Life = 10;


let opponent = {};//for card effects
let player = {};

let opponentlife = {};//for card effects
let playerlife = {};




const submitBtn1 = document.getElementById("submit1");
const inputBar1 = document.getElementById("input1");

const submitBtn2 = document.getElementById("submit2");
const inputBar2 = document.getElementById("input2");



const cards = {
    rock: rock,
    paper: paper,  
    scissors: scissors
}



submitBtn1.addEventListener("click", () => {
    let choice = inputBar1.value.toLowerCase();
    player1.choice = choice;
    player = player1;
    opponent = player2;
    playerlife = player1Life;
    opponentlife = player2Life;
    console.log(`Player 1 chose: ${player1.choice}`);

    if (cards[choice]) {
        cards[choice]();
    } else {
        console.log("Invalid choice");
    }
}); 

submitBtn2.addEventListener("click", () => {
    let choice = inputBar2.value.toLowerCase();
    player2.choice = choice;
    player = player2;
    opponent = player1;
    playerlife = player2Life;
    opponentlife = player1Life;
    console.log(`Player 2 chose: ${player2.choice}`);

    if (cards[choice]) {
        cards[choice]();
    } else {
        console.log("Invalid choice");
    }

    player1Life = player1Life;
    player2Life = player2Life;
}); 



export function checkFunctionality() {  // this checkws if the javascript is running and logs life of players
    console.log("Javascript is running");
    console.log(player1Life, player2Life);
}
checkFunctionality();

function sideCheck() {
    //to do, I want  this to check who used the card, and assign the functions of cards based off this
    
}




