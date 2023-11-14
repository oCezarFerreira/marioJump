import gameLoop from './modules/gameLoop'

function main () {
  const mario = document.querySelector('.mario')
  const pipe = document.querySelector('.pipe')
  const startGameBtt = document.querySelector('.start-game')

  const startGame = () => gameLoop(pipe, mario)

  document.addEventListener('keydown', jump)

  function jump () {
    mario.classList.add('jump')

    setTimeout(() => {
      mario.classList.remove('jump')
    }, 500)
  }

  startGameBtt.addEventListener('click', startGame)
}

main()
