const Draw = ({ canvas, canvasWidth, canvasHeight, blockWidth, blockHeight }) => {

  const debug = true;

  const outline = (x, y) => {
    canvas.strokeRect(x, y, 50, 50)

    if(debug){
      canvas.font = "10px Arial";
      canvas.fillText(`${(x / blockWidth)}`, x+2, y + 10)
      canvas.fillText(`${(y / blockHeight)}`, x+2, y + 20)
    }
  }

  const rect = (x, y, color = '200, 0, 0') => {
    canvas.fillStyle = 'rgb(' + color + ')'
    canvas.fillRect(x, y, blockWidth, blockHeight)
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
