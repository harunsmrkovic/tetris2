import Draw from './draw'

const Game = ({ canvas, canvasWidth, canvasHeight, blockWidth = 25, blockHeight = 25 }) => {

  let board = [];

  const draw = Draw({ canvas, canvasWidth, canvasHeight, blockWidth, blockHeight })

  const getCoordinates = (x, y) => {
    return {
      x: x * blockWidth,
      y: y * blockHeight
    }
  }

  const isBorder = (which, x, y) => {
    switch(which){
      case 'left':
        return (x === 0)
      case 'right':
        return (x === canvasWidth - blockWidth)
      case 'bottom':
        return (y === canvasHeight - blockHeight)
      default:
        return false
    }
  }

  const initBoard = () => {
    board = [...Array(canvasWidth / blockWidth)].map((_, cx) => [...Array(canvasHeight / blockHeight)].map((_, cy) => {
      const { x, y } = getCoordinates(cx, cy)
      return {
        x,
        y,
        block: {
          color: 0,
          fill: (isBorder('right', x, y) || isBorder('left', x, y) || isBorder('bottom', x, y)) ? true : false
        }
      }
    }))
    console.info(board)
  }

  const initOutlines = (color = '#dddddd') => {
    console.log('outlines fn called')
    canvas.strokeStyle = color
    _.each(_.flatten(board), ({ x, y }) => draw.outline(x, y))
  }

  const renderBoard = () => {
    console.log('render fn called')
    _.each(_.flatten(board), ({ block, x, y }) => {
      if(block.fill){
        draw.rect(x, y, (!block.color) ? '0, 0, 0' : null)
      }
    })
  }

  // Public

  const start = () => {
    initBoard()
    initOutlines()
    renderBoard()
    // setInterval(renderBoard, 10000)
  }

  return {
    start
  }
}

export default Game
