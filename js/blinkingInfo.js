let info = document.querySelector('.footer-text')

const colors = ['white', 'green', 'red', 'yellow', 'magenta', 'cyan']
let color = 0


const nextColor = () => {
  if (color < colors.length-1){
    color +=1
  } else {
    color = 0
  }
  info.style.color = colors[color]
}

let footerInt = setInterval(nextColor, 2000)
