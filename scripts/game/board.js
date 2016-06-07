import { checkBorder } from './checks'

export const initBoard = (boardWidth, boardHeight) => {
  const isBorder = checkBorder({ boardWidth, boardHeight })
  return [...Array(boardWidth)].map((_, x) => [...Array(boardHeight)].map((_, y) => {
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
