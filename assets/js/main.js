(function() {
  let body = document.querySelector('body')
  body.classList.remove('no-js')
  body.classList.add('js')

  var menu = new Menu({
    container: '.header-nav',
    toggleButton: '.header-button',
    widthEnabled: 1024
  })
})()