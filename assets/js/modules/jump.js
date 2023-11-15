export default function jump (gameIsRun) {
  const mario = document.querySelector('.mario')
  const pipe = document.querySelector('.pipe')
  const currentScore = document.querySelector('.current-points')

  const pipePosition = pipe.offsetLeft

  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)

  let score = Number(currentScore.textContent)
  if (gameIsRun && pipePosition > 150 && pipePosition < 250) {
    score++
  }
  currentScore.innerHTML = score
}
