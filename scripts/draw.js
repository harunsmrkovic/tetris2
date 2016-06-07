const Draw = ({ canvasWidth, canvasHeight, blockWidth, blockHeight }) => {

  const canvas = document.getElementById('game').getContext('2d')

  const debug = true;

  const getX = (x) => x * blockWidth
  const getY = (y) => y * blockHeight

  const outline = (x, y, color = '#dddddd') => {
    canvas.strokeStyle = color
    canvas.strokeRect(getX(x), getY(y), blockWidth, blockHeight)

    if(debug){
      canvas.font = "10px Arial";
      canvas.fillText(`${(x)}`, getX(x) + 2, getY(y) + 10)
      canvas.fillText(`${(y)}`, getX(x) + 2, getY(y) + 20)
    }
  }

  const rect = (x, y, color = '200, 0, 0') => {
    canvas.fillStyle = 'rgb(' + color + ')'
    canvas.fillRect(getX(x), getY(y), blockWidth, blockHeight)
  }

  const clearCanvas = () => {
    canvas.clearRect(0, 0, canvasWidth, canvasHeight)
  }

  return {
    outline,
    rect,
    clearCanvas
  }
}

export default Draw
