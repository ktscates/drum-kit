function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    //Stop the function from running
    if(!audio) return

    //rewind to start
    audio.currentTime = 0 

    audio.play()
    key.classList.add("playing")
}

function removeTransition(e) {
    // Skip if its not transform
    if(e.propertyName !== 'transform') return 

    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener('keydown', playSound)