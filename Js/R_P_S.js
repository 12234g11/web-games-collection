var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
let flag = 0;
let opchoice = document.getElementById("opponent-choice");
let urchoice = document.getElementById("your-choice");
var choices = ["rock", "paper", "scissors"];
function winnerWindow(){
    flag = 1;
    let container = document.getElementById("winner");
    let containerTxt = document.getElementById("txt");

    if(yourScore > opponentScore){
        container.style.zIndex = 8;
        container.style.opacity = '1';
        containerTxt.innerHTML = 'You Won';
        let winSound = new Audio('./sounds/piglevelwin2mp3-14800.mp3');
        winSound.play();
        setInterval(function(){containerTxt.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
    else if(yourScore < opponentScore){
        container.style.zIndex = 8;
        container.style.opacity = '1';
        containerTxt.innerHTML = 'You Lost';
        let loseSound = new Audio('./sounds/080047_lose_funny_retro_video-game-80925.mp3');
        loseSound.play();
        setInterval(function(){containerTxt.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
    else{
        container.style.zIndex = 8;
        container.style.opacity = '1';
        containerTxt.innerHTML = 'Draw';
        let drawSound = new Audio('./sounds/mixkit-unlock-game-notification-253.wav'); 
        drawSound.play();
        setInterval(function(){containerTxt.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
}
function selectChoice(id) {
    if(flag==1){
        return;
    }
    let winSound = new Audio('./sounds/pop-sound-effect-197846.mp3');
    winSound.play();
    you = id;
    document.getElementById("your-choice").src = "./Pictures/" + you + ".png"; 
    opponent = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById("opponent-choice").src = "./Pictures/" + opponent + ".png";
    opchoice.style.opacity='1';
    urchoice.style.opacity='1';

    if (you == "rock") {
        if (opponent == "scissors") yourScore += 1; 
        else if (opponent == "paper") opponentScore += 1; 
    } else if (you == "scissors") {
        if (opponent == "paper") yourScore += 1; 
        else if (opponent == "rock") opponentScore += 1; 
    } else if (you == "paper") {
        if (opponent == "rock") yourScore += 1; 
        else if (opponent == "scissors") opponentScore += 1;
    }


    document.getElementById("your-score").innerText = "Your Score : " +yourScore; 
    document.getElementById("opponent-score").innerText = "Computer Score : "+opponentScore; 

}
