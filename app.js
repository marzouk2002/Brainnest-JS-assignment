//variables
let userscore=0;
let compscore=0;

//DOM variables
const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");
const scoreboard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function compchoice() {
    const choices=['r','p','s']
    return choices[Math.floor(Math.random()*3)]
}

function win(user,comp) {
    userscore++
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const divchoice=document.getElementById(user);
    switch (user) {
        case 'r':
            user="Rock"
            break;
        case 's':
            user="Scissor"
            break;
        case 'p':
            user="Paper"
            break;
    };
    switch (comp) {
        case 'r':
            comp="Rock"
            break;
        case 's':
            comp="Scissor"
            break;
        case 'p':
            comp="Paper"
            break;
    };
    result_div.innerHTML=user+" beats "+comp+". You win!"
    divchoice.classList.add("green-glow")
    setTimeout(function(){divchoice.classList.remove("green-glow")},300);

}

function lose(user,comp) {
    compscore++
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const divchoice=document.getElementById(user);
    switch (user) {
        case 'r':
            user="Rock"
            break;
        case 's':
            user="Scissor"
            break;
        case 'p':
            user="Paper"
            break;
    };
    switch (comp) {
        case 'r':
            comp="Rock"
            break;
        case 's':
            comp="Scissor"
            break;
        case 'p':
            comp="Paper"
            break;
    };
    result_div.innerHTML=comp+" beats "+user+". You lose!"
    divchoice.classList.add("red-glow")
    setTimeout(function(){divchoice.classList.remove("red-glow")},300);

}

function draw(user) {
    result_div.innerHTML="It's draw. Try again!"
    const divchoice=document.getElementById(user);
    divchoice.classList.add("gray-glow")
    setTimeout(function(){divchoice.classList.remove("gray-glow")},300);
}

function game(userchoice) {
    const compChoice=compchoice();
    switch(userchoice+compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice,compChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userchoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r")})
    paper_div.addEventListener('click',function() {
        game("p");
    })
    scissor_div.addEventListener('click',function() {
        game("s");
    })
}
main();