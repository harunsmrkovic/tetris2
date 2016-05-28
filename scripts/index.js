import canvas from './canvasInit'
import Draw from './draw'
import Game from './game'


(function(){
  const tetris = Game({ canvas, canvasWidth: 600, canvasHeight: 800 })

  tetris.start()
}())
