// change navbar styles on scroll//

window.addEventListener('click', () => {
     document.querySelector('nav').classList.toggle
     ('window-scroll', window.scrollY > 0 )
   })
   