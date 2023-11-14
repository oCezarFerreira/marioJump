export default function gameLoop (pipe, mario) {
  setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''))

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`

      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`
      mario.src = './assets/images/game-over.png'
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'
      mario.style.marginBottom = '35px'

      clearInterval(gameLoop)
    }
  }, 10)
}
