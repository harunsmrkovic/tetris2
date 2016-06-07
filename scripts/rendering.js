const render = (draw) => {

  const outlines = (board) => {
    _.each(_.flatten(board), ({ x, y }) => draw.outline(x, y))
  }

  const board = (action, { board }) => {
    console.info('render board', board, draw)
    _.each(_.flatten(board), ({ block, x, y }) => {
      if(block.fill){
        draw.rect(x, y, (!block.color) ? '0, 0, 0' : block.color)
      }
    })
  }

  return {
    outlines,
    board
  }

}

export default render
