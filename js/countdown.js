// countdown to Friday March 15 at 8PM
let interval;
let now = Date.now()
let partyTime = new Date('March 15, 2019 20:00:00')
let timer = document.querySelector('.countdown').firstElementChild

const formatTime = () => {
  // days:hours:minutes:seconds
  if (seconds){
    let secondsRemaining = seconds
    const days = Math.floor(seconds/86400)
    secondsRemaining = (secondsRemaining - days*86400)
    const hours = Math.floor(secondsRemaining/3600)
    secondsRemaining = (secondsRemaining - hours*3600)
    const minutes = Math.floor(secondsRemaining/60)
    secondsRemaining = Math.round(secondsRemaining - (minutes * 60))
    return `${formatTimes(days)}:${formatTimes(hours)}:${formatTimes(minutes)}:${formatTimes(secondsRemaining)}`
  } else {
    return `00:00:00:00`
  }
}

const formatTimes = (time) => {
  if (time < 10) {
    return `0${time}`
  } else  {
    return `${time}`
  }
}

let seconds = (partyTime - now)/1000

timer.innerText = formatTime(seconds)

const countdown = () => {
  seconds -= 1
  timer.innerText = formatTime(seconds)
}

interval = setInterval(countdown,1000)
