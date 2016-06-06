import canvas from './scripts/canvasInit'
import Draw from './scripts/draw'
import Game from './scripts/game'


(function(){
  const tetris = Game({ canvas, canvasWidth: 600, canvasHeight: 800 })

  tetris.start()
}())
