let marquee = document.querySelector('marquee')

const quotes = [`"Crank that Soulja' boy" - bryce `, `"It's my dog's birthday - We can do whatever we want" - bryce`, `"Just keep swimming" - bryce`, `"Be humble" - bryce`]
let currentQuote = 0

const changeMarqueeText = () => {
  if (currentQuote < quotes.length-1) {
    currentQuote += 1
  } else {
    currentQuote = 0
  }
  marquee.innerText = quotes[currentQuote]
}

let marqInt = setInterval(changeMarqueeText, 5000)
