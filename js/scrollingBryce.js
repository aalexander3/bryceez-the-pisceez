
const scrollIt = () => {
  let lastY = pageYOffset;
  const pizzaBryce = document.querySelector('.fake-image')

  const scrolling = (e) => {
    if (e.deltaY > 0) {
      lastY += e.deltaY
      pizzaBryce.style.opacity += .05
    }
    if (lastY < 200) {
      e.preventDefault()
      console.log('cant sroll');
    }
    // console.log(pageYOffset)
  }
  document.addEventListener('wheel', scrolling)
}











document.addEventListener('DOMContentLoaded', scrollIt)
