import _ from 'lodash'

const render = (draw) => {

  const outlines = (action, { board }) => {
    _.each(_.flatten(board), ({ x, y }) => draw.outline(x, y))
  }

  const board = (action, { board }) => {
    _.each(_.flatten(board), ({ block, x, y }) => {
      if(block.fill){
        draw.rect(x, y, (!block.color) ? '0, 0, 0' : block.color)
      }
      else {
        draw.rect(x, y, '255, 255, 255')
      }
    })
  }

  return {
    outlines,
    board
  }

}

export default render
