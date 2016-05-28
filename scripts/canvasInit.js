const canvas = document.getElementById('game')

if(!canvas.getContext){
  alert('Hello! This game is using cutting edge tech from 2005. Please update your browser in order to use it.')
}

const ctx = canvas.getContext('2d')

export default ctx
