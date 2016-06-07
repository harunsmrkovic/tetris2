import _ from 'lodash'

import state from './scripts/state'
import rendering from './scripts/rendering'
import drawEngine from './scripts/draw'

import config from './config'

(function(){
  const { board, block } = config

  // draw instance
  const draw = drawEngine({ canvasWidth: (board.width * block.width), canvasHeight: (board.height * block.height), blockWidth: block.width, blockHeight: block.height })

  // state for the game
  const { dispatch, subscribe, getState } = state()

  // rendering callbacks
  const render = rendering(draw)

  // subscribe rendering
  subscribe(render.outlines)
  subscribe(render.board)

  // start
  dispatch({ type: 'INIT', boardWidth: board.width, boardHeight: board.height })

}())
