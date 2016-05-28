import game from './canvasInit'

const Tetris = ({ game, canvasWidth, canvasHeight, blockWidth = 25, blockHeight = 25 }) => {

  let matrix = [];

  const initMatrix = () => {
    matrix = [...Array(canvasWidth / blockWidth)].map(_ => [...Array(canvasHeight / blockHeight)].map(_ => false))
    console.info(matrix)
  }

  const getCoordinates = (x, y) => {
    return {
      x: x * blockWidth,
      y: y * blockHeight
    }
  }

  const drawOutlines = (color = '#dddddd') => {
    game.strokeStyle = color
    const outlineCoords = _.flatten(matrix.map((ys, x) => ys.map((s, y) => getCoordinates(x, y))))
    _.each(outlineCoords, (coord) => drawOutline(coord.x, coord.y))
  }

  const drawOutline = (x, y) => {
    game.strokeRect(x, y, 50, 50)
  }

  const drawRect = (x, y, color = '200, 0, 0') => {
    game.fillStyle = 'rgb(' + color + ')'
    game.fillRect(x, y, 50, 50)
  }

  const clearCanvas = () => {
    game.clearRect(0, 0, canvasWidth, canvasHeight)
  }

  // Public

  const start = () => {
    initMatrix()
    drawOutlines()
  }

  return {
    start
  }
}

(function(){
  const tetris = Tetris({ game, canvasWidth: 600, canvasHeight: 800 })

  tetris.start()
}())
