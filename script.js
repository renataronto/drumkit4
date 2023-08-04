//all keydown 
window.addEventListener('keydown', onKeyDown);

function onKeyDown(event) {
    keyPressed = event.key;
    if (keyPressed == 'A' || keyPressed == 'a') 
        playClap();
    if (keyPressed == 'S' || keyPressed == 's')
        playHihat();
    if (keyPressed == 'D' || keyPressed == 'd')
        playKick();
    if(keyPressed == 'F' || keyPressed == 'f') 
        playOpenHat(); 
    if (keyPressed == 'G' || keyPressed == 'g') 
        playBoom();
    if(keyPressed == 'H' || keyPressed =='h') 
        playRide();
    if(keyPressed == 'J' || keyPressed == 'j')  
        playSnare();
    if(keyPressed == 'K' || keyPressed == 'k')  
        playTom();
    if(keyPressed =='L' || keyPressed =='l')
       playTink();   
}


//clap click
btnClap = document.getElementById("btnClap");

btnClap.addEventListener("click", playClap);

function playClap() {
    let audio = new Audio("./sounds/clap.wav");
    audio.play()
}

//hihat click
btnHihat = document.getElementById("btnHihat");

btnHihat.addEventListener("click", playHihat);

function playHihat() {
    let audio = new Audio("./sounds/hihat.wav");
    audio.play()
}

//kick click
btnKick = document.getElementById("btnKick");

btnKick.addEventListener("click", playKick);

function playKick() {
    let audio = new Audio("./sounds/kick.wav");
    audio.play()
}

//openHat click
btnOpenHat = document.getElementById("btnOpenHat");

btnOpenHat.addEventListener("click", playOpenHat);

function playOpenHat() {
    let audio = new Audio("./sounds/openhat.wav");
    audio.play()
}

//boom click
btnBoom = document.getElementById("btnBoom");

btnBoom.addEventListener("click", playBoom);

function playBoom() {
    let audio = new Audio("./sounds/boom.wav");
    audio.play()
}

//ride click
btnRide = document.getElementById("btnRide");

btnRide.addEventListener("click", playRide);

function playRide() {
    let audio = new Audio("./sounds/ride.wav");
    audio.play()
}

//snare click 
btnSnare = document.getElementById("btnSnare");

btnSnare.addEventListener("click", playSnare);

function playSnare() {
    let audio = new Audio("./sounds/snare.wav");
    audio.play()
}

//tom click
btnTom = document.getElementById("btnTom");

btnTom.addEventListener("click", playTom);

function playTom() {
    let audio = new Audio("./sounds/tom.wav");
    audio.play()
}

//tink click 
btnTink = document.getElementById("btnTink");

btnTink.addEventListener("click", playTink);

function playTink() {
    let audio = new Audio("./sounds/tink.wav");
    audio.play()
}
