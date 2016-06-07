import { cp } from './helpers'

import { initBoard } from './game/board'
import { isBorder, isOverlapping } from './game/checks'
import { glueShape, moveShape, shiftShape } from './game/moves'
import { getShape } from './game/shapes'

const mutate = (action, state) => {
  switch(action.type) {
    case 'INIT':
      const { boardWidth, boardHeight } = action
      return cp(state, {
        board: initBoard(boardWidth, boardHeight)
      })
    default:
      return state
  }
}

export default mutate
