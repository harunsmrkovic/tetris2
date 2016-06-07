export const glueShape = (shape, add = true) => {
  const [minX] = _.minBy(shape, s => s[0])
  const [_x, minY] = _.minBy(shape, s => s[1])

  const [maxX] = _.maxBy(shape, s => s[0])
  const [_y, maxY] = _.maxBy(shape, s => s[1])

  const shapeColor = [_.random(15, 235), _.random(15, 235), _.random(15, 235)].join(', ')

  return board.map((col, x) => col.map((coord, y) => {
    if(x >= minX && y >= minY && x <= maxX && y <= maxY){
      if(!coord.block.fill || (!add && coord.block.fill)){
        coord.block.color = shapeColor
        coord.block.fill = (shape.filter(c => c[0] === x && c[1] === y).length) ? add : false
      }
    }
    return coord
  }))
}

export const shiftShape = (shape, offsetX = 0, offsetY = 0) => {
  return shape.map(coords => {
    coords[0] += offsetX
    coords[1] += offsetY
    return coords
  })
}

export const moveShape = (shape, offsetX = 0, offsetY = 0) => {
  const shiftedShape = shiftShape(shape, offsetX, offsetY)
  if(!isOverlapping(shiftedShape)){
    // glueShape(shape, false)
    return glueShape(shiftedShape)
  }
}
