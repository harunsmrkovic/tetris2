import game from './canvasInit'

const Drawing = ({ canvas, canvasWidth, canvasHeight }) => {

  const drawOutline = (x, y) => {
    canvas.strokeRect(x, y, 50, 50)
  }

  const drawRect = (x, y, color = '200, 0, 0') => {
    canvas.fillStyle = 'rgb(' + color + ')'
    canvas.fillRect(x, y, 50, 50)
  }

  const clearCanvas = () => {
    canvas.clearRect(0, 0, canvasWidth, canvasHeight)
  }

  return {
    drawOutline,
    drawRect,
    clearCanvas
  }
}

const Tetris = ({ game, canvasWidth, canvasHeight, blockWidth = 25, blockHeight = 25 }) => {

  let matrix = [];

  const drawing = Drawing({ canvas: game, canvasWidth, canvasHeight })

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

  const initOutlines = (color = '#dddddd') => {
    game.strokeStyle = color
    const outlineCoords = _.flatten(matrix.map((ys, x) => ys.map((s, y) => getCoordinates(x, y))))
    _.each(outlineCoords, (coord) => drawing.drawOutline(coord.x, coord.y))
  }

  // Public

  const start = () => {
    initMatrix()
    initOutlines()
  }

  return {
    start
  }
}

(function(){
  const tetris = Tetris({ game, canvasWidth: 600, canvasHeight: 800 })

  tetris.start()
}())
