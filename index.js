import _ from 'lodash'

import state from './scripts/state'
import rendering from './scripts/rendering'
import drawEngine from './scripts/draw'

(function(){
  // draw instance
  const draw = drawEngine({ canvasWidth: 600, canvasHeight: 800, blockWidth: 25, blockHeight: 25 })

  // state for the game
  const { dispatch, subscribe, getState } = state()

  // rendering callbacks
  const render = rendering(draw)

  // subscribe rendering
  subscribe(render.board)
  subscribe(render.outlines)

  // start
  dispatch({ type: 'INIT', boardWidth: 24, boardHeight: 32 })

}())
