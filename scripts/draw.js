const Draw = ({ canvasWidth, canvasHeight, blockWidth, blockHeight }) => {

  const canvas = document.getElementById('game').getContext('2d')

  const debug = true;

  const outline = (x, y, color = '#dddddd') => {
    canvas.strokeStyle = color
    canvas.strokeRect(x, y, 50, 50)

    if(debug){
      canvas.font = "10px Arial";
      canvas.fillText(`${(x / blockWidth)}`, x+2, y + 10)
      canvas.fillText(`${(y / blockHeight)}`, x+2, y + 20)
    }
  }

  const rect = (x, y, color = '200, 0, 0') => {
    if(debug) console.info('Draw rectangle @', x, y)
    canvas.fillStyle = 'rgb(' + color + ')'
    canvas.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight)
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
