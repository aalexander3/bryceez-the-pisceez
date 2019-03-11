const images = {
  barrelBryce: './images/barrelBryce.png',
  // pizzaBryce: './images/Bryce pizzz-01.png',
  // brycePi: './images/brycePI.jpg',
  coolBryce: './images/coolBryce.png',
  longBryce: './images/longBryce.png',
  partyBryce: './images/partyBryce.png',
  sunBryce: './images/sunBryce.png',
  prettyBryce: './images/prettyBryce.png',
}

let direction = 'right'
let bryceSize = 2

const getRandomBryce = () => {
  let keys = Object.keys(images)
  return images[keys[ keys.length * Math.random() << 0]]
}

const generateNewBryce = () => {
  bryceSize < 90 ? bryceSize *= 1.8 : bryceSize
  if (direction === 'right') {
    direction = 'left'
  } else {
      direction = 'right'
  }
  let img = document.createElement('IMG')
  img.className = `zooming-bryce spin-${direction}`
  img.src = getRandomBryce()
  img.style.height = `${bryceSize}vh`
  img.style.bottom = Math.random() * 800
  img.style.right = Math.random() * window.screen.width
  document.body.append(img)
}

// let bryceInt = setInterval(generateNewBryce, 1500)
// setTimeout(()=>{
//   clearInterval(bryceInt)
// }, 20000)
