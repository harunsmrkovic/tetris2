import { initBoard } from '../scripts/game/board'

import { expect } from 'chai'

describe('Board init', function(){
  it('should return 10x15 two-dimensional array given those input width and height', function(){
    const width = 10
    const height = 15
    const initedBoard = initBoard(width, height)

    expect(initedBoard).to.have.lengthOf(width)

    for(var i = 0; i < width; i++){
      expect(initedBoard[i]).to.have.lengthOf(height)
    }
  })
})
