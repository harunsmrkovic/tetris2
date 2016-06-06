import Draw from './draw'
import _ from 'lodash'

const Game = ({ canvas, canvasWidth, canvasHeight, blockWidth = 25, blockHeight = 25 }) => {

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
    return [...Array(canvasWidth / blockWidth)].map((_, cx) => [...Array(canvasHeight / blockHeight)].map((_, cy) => {
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
  }

  const shapes = [
    [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1]],
    [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]],
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]
  ];

  const steerShape = (shape, offsetX = 0, offsetY = 0) => {
    if(!isOverlapping(shiftShape(shape, offsetX, offsetY))){
      glueShape(shape, false)
      // console.warn('shift by', offsetX, offsetY)
      return glueShape(shiftShape(shape, offsetX, offsetY))
    }
  }

  const isOverlapping = (shape) => {
    return !!shape.map(([x, y]) => (board[x] && board[x][y] && board[x][y].block.fill)).filter(does => does).length
  }

  const shiftShape = (shape, offsetX = 0, offsetY = 0) => {
    console.log('shift shape', shape, offsetX, offsetY)
    return shape.map(coords => {
      coords[0] += offsetX
      coords[1] += offsetY
      console.info('coords[0]', coords[0], offsetX);
      console.info('coords[1]', coords[1], offsetY);
      return coords
    })
  }

  const glueShape = (shape, add = true) => {

    console.warn('glue?', add, 'the shape', shape)

    const [minX] = _.minBy(shape, s => s[0])
    const [_x, minY] = _.minBy(shape, s => s[1])

    const [maxX] = _.maxBy(shape, s => s[0])
    const [_y, maxY] = _.maxBy(shape, s => s[1])

    const shapeColor = [_.random(15, 235), _.random(15, 235), _.random(15, 235)].join(', ')

    board = board.map((col, x) => col.map((coord, y) => {
      if(x >= minX && y >= minY && x <= maxX && y <= maxY){
        if(!coord.block.fill || (!add && coord.block.fill)){
          coord.block.color = shapeColor
          coord.block.fill = (shape.filter(c => c[0] === x && c[1] === y).length) ? add : false
        }
      }
      return coord
    }))

    return shape
  }

  let board = initBoard()

  const initOutlines = (color = '#dddddd') => {
    canvas.strokeStyle = color
    _.each(_.flatten(board), ({ x, y }) => draw.outline(x, y))
  }

  const renderBoard = () => {
    draw.clearCanvas()
    initOutlines()
    _.each(_.flatten(board), ({ block, x, y }) => {
      if(block.fill){
        draw.rect(x, y, (!block.color) ? '0, 0, 0' : block.color)
      }
    })
  }

  // Public

  const start = () => {
    renderBoard()
    setTimeout(() => {
      let s = shiftShape(shapes[0], 12, 0)
      // glueShape(s)

      let i = 2
      setInterval(() => {
        steerShape(s, 0, i++)
      }, 5000)
    }, 1000)
    setTimeout(() => {
      glueShape(shiftShape(shapes[1], 10, 10))
    }, 1000)
    setTimeout(() => {
      glueShape(shiftShape(shapes[2], 10, 20))
    }, 2000)

    setInterval(renderBoard, 1500)
  }

  return {
    start
  }
}

export default Game
