import chai, { expect } from 'chai'
import spies from 'chai-spies'

import rendering from '../scripts/rendering'
import { initBoard } from '../scripts/game/board'

chai.use(spies)

const outlineSpy = chai.spy(() => {})
const rectSpy = chai.spy(() => {})

const render = rendering({ outline: outlineSpy, rect: rectSpy })

describe('Rendering', function(){

  let board = initBoard(10, 15)

  render.board({}, { board })

  it('outline and rect should be a spy :) ', function(){
    expect(outlineSpy).to.be.spy
    expect(rectSpy).to.be.spy
  })

  it('should call rectDraw 150 times after being supplied with a 10x15 board', function(){
    expect(rectSpy).to.have.been.called.exactly(150)
  })

  it('should call rectDraw with black box on outline', function(){
    const blackColor = '0, 0, 0'
    expect(rectSpy).to.have.been.called.with(0, 0, blackColor)
    expect(rectSpy).to.have.been.called.with(9, 0, blackColor)

    expect(rectSpy).to.have.been.called.with(0, 14, blackColor)
    expect(rectSpy).to.have.been.called.with(3, 14, blackColor)
  })

  it('should call rectDraw with white box on inside of empty board', function(){
    const whiteColor = '255, 255, 255'

    expect(rectSpy).to.have.been.called.with(1, 1, whiteColor)
    expect(rectSpy).to.have.been.called.with(5, 10, whiteColor)
  })

})
