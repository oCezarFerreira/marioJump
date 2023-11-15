import jump from './modules/jump'

function main () {
  const mario = document.querySelector('.mario')
  const pipe = document.querySelector('.pipe')
  const startGameBtt = document.querySelector('.btn-start-game')
  const menu = document.querySelector('.menu')

  // eslint-disable-next-line prefer-const
  let gameIsRun = false
  // eslint-disable-next-line prefer-const

  const gameLoop = () => {
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

        gameIsRun = false
        clearInterval(gameLoop)
      }
    }, 10)
  }

  startGameBtt.addEventListener('click', () => {
    menu.style.display = 'none'
    gameLoop()
    gameIsRun = true
  })

  document.addEventListener('keydown', () => jump(gameIsRun))
}

main()
