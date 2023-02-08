function Carousel(config){
  this.container = ( typeof config.container === 'string') ? 
  document.querySelector(config.container) : 
  config.container
  
  this.itens = (typeof config.itens === 'string') ? 
  this.container.querySelectorAll(config.itens) : 
  config.itens
  
  this.buttonPrev = (typeof config.buttonPrev === 'string') ? 
  this.container.querySelector(config.buttonPrev) : 
  config.buttonPrev
  
  this.buttonNext = (typeof config.buttonNext === 'string') ?
  this.container.querySelector(config.buttonNext) : 
  config.buttonNext
  
  let _this = this;
  let _currentSlide = 0
  
  init()
  
  function init() {
      let _show = _this.container.querySelectorAll('.show')
      
      Array.prototype.forEach.call(_show, function(sh){
          sh.classList.remove('show')
      })
      _this.itens[0].classList.add('show')
      _this.buttonNext.removeAttribute('style')
      _this.buttonPrev.removeAttribute('style')
      
      addListeners()        
  }
  
  function addListeners() {
      _this.buttonNext.addEventListener('click', showNextSlide)
      _this.buttonPrev.addEventListener('click', showPrevSlide)
  }
  
  function showNextSlide() {
      _currentSlide++;
      showSlide()
  }
  
  function showPrevSlide() {
      _currentSlide--;
      showSlide()
  }
  
  function showSlide() {
      let quantity = _this.itens.length;
      let slide = _currentSlide % quantity;
      slide = Math.abs(slide);
      
      _this.container.querySelector('.show').classList.remove('show');
      _this.itens[slide].classList.add('show')
  }
}