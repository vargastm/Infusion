(function() {
  let body = document.querySelector('body')
  body.classList.remove('no-js')
  body.classList.add('js')

  let menu = new Menu({
    container: '.header-nav',
    toggleButton: '.header-button',
    widthEnabled: 1024
  })

  let carouselImages = new Carousel({
    container: '.laptop-slider .slideshow',
    itens: 'figure',
    buttonPrev: '.prev',
    buttonNext: '.next'
  })

  let carouselQuotes = new Carousel({
    container: '.quote-slideshow',
    itens: 'figure',
    buttonPrev: '.prev',
    buttonNext: '.next'
  })
})()