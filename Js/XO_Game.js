let turn = 'X';
let title = document.querySelector('.dashboard');
let container=[];
let counter = 1;
let flag = 1;
function endGame(num1,num2,num3){
    title.innerHTML=`${container[num1]} Winner`;
    document.getElementById('square'+ num1).style.background='#000';
    document.getElementById('square'+ num1).style.color='#fff';
    document.getElementById('square'+ num1).style.boxShadow = '0 0 10px inset rgb(73, 73, 73)';
    document.getElementById('square'+ num2).style.background='#000';
    document.getElementById('square'+ num2).style.color='#fff';
    document.getElementById('square'+ num2).style.boxShadow = '0 0 10px inset rgb(73, 73, 73)';
    document.getElementById('square'+ num3).style.background='#000';
    document.getElementById('square'+ num3).style.color='#fff';
    document.getElementById('square'+ num3).style.boxShadow = '0 0 10px inset rgb(73, 73, 73)';
    let winSound = new Audio('./sounds/piglevelwin2mp3-14800.mp3');
    winSound.play();
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function winner(){
    for (let i = 1; i < 10; i++) {
        container[i] = document.getElementById('square'+i).innerHTML;
    } 

    if(container[1] == container[2] && container[2] == container[3] && container[1] != ''){
        endGame(1,2,3);
        flag = 0;
    }
    else if(container[4] == container[5] && container[5] == container[6] && container[4] != ''){
        endGame(4,5,6);
        flag = 0;
    }
    else if(container[7] == container[8] && container[8] == container[9] && container[7] != ''){
        endGame(7,8,9);
        flag = 0;
    }
    else if(container[1] == container[4] && container[4] == container[7] && container[1] != ''){
        endGame(1,4,7);
        flag = 0;
    }
    else if(container[2] == container[5] && container[5] == container[8] && container[2] != ''){
        endGame(2,5,8);
        flag = 0;
    }
    else if(container[3] == container[6] && container[6] == container[9] && container[3] != ''){
        endGame(3,6,9);
        flag = 0;
    }
    else if(container[1] == container[5] && container[5] == container[9] && container[1] != ''){
        endGame(1,5,9);
        flag = 0;
    }
    else if(container[3] == container[5] && container[5] == container[7] && container[3] != ''){
        endGame(3,5,7);
        flag = 0;
    } 
    if(counter == 10 && flag != 0){
        title.innerHTML='Game Draw';
        let drawSound = new Audio('./sounds/mixkit-unlock-game-notification-253.wav'); 
        drawSound.play();

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
}
function turns(id){
    if(flag == 0) return;
    let winSound = new Audio('./sounds/pop-sound-effect-197846.mp3');
    winSound.play();
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML ==''){
        element.innerHTML = 'X';
        title.innerHTML= 'Player O turn';
        turn='O';
        counter++;
    }
    else if(turn === 'O' && element.innerHTML==''){
        element.innerHTML = 'O';
        title.innerHTML= 'Player X turn';
        turn='X';
        counter++;
    }
    winner();
}