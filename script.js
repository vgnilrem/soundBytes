// this function gonna play the sound for the key pressed
function playSound(event) {
    // Identify the audio element for the key that's pressed:
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    //select the key div for the key that's pressed
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    //added the condition to stop if there is no audio found
    if (!audio) return;

    audio.currentTime = 0; 
    audio.play(); 

    // the playing class is to get the animation effect
    key.classList.add("playing");
}


function removeTransition(event) {
    if (event.propertyName !== "transform") return; 
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// triggered sound play when the 'keydown' event happens
window.addEventListener("keydown", playSound);
