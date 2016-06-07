import { checkBorder, isOverlapping } from '../scripts/game/checks'

import { assert } from 'chai'

let isBorder = checkBorder({ boardWidth: 10, boardHeight: 15 })

describe('Checks for board of size 10x15', function(){

  it('should return that 1, 0 is not any border', function(){
    assert.equal(isBorder('left', 1, 0), false)
    assert.equal(isBorder('bottom', 1, 0), false)
    assert.equal(isBorder('right', 1, 0), false)
  })

  it('should check for the left border', function(){
    assert.equal(isBorder('left', 0, 0), true)
    assert.equal(isBorder('left', 0, 5), true)
    assert.equal(isBorder('left', 0, 14), true)
    assert.equal(isBorder('left', 4, 14), false)
  })

  it('should check for the bottom border', function(){
    assert.equal(isBorder('bottom', 0, 14), true)
    assert.equal(isBorder('bottom', 5, 14), true)
    assert.equal(isBorder('bottom', 9, 14), true)
    assert.equal(isBorder('bottom', 11, 15), false)
  })

  it('should check for the right border', function(){
    assert.equal(isBorder('right', 9, 0), true)
    assert.equal(isBorder('right', 9, 5), true)
    assert.equal(isBorder('right', 9, 10), true)
    assert.equal(isBorder('right', 8, 0), false)
  })

  it('should return that 9, 14 is a bottom and right border', function(){
    assert.equal(isBorder('bottom', 9, 14), true)
    assert.equal(isBorder('right', 9, 14), true)
  })

})
