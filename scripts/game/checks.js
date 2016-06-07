// check if passed block is on border
export const checkBorder = ({ boardWidth, boardHeight }) => {
  return (which, x, y) => {
    switch(which){
      case 'left':
        return (x === 0)
      case 'right':
        return (x === boardWidth - 1)
      case 'bottom':
        return (y === boardHeight - 1)
      default:
        return false
    }
  }
}

export const isOverlapping = board => shape => !!shape.map(([x, y]) => (board[x] && board[x][y] && board[x][y].block.fill)).filter(does => does).length
