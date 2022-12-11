const divs = document.querySelectorAll('.reveal')

function isVisible (el) {
    const { top, bottom } = el.getBoundingClientRect()
    if (bottom < 0) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
}

function showVisible() {
    divs.forEach(function(div) {
        if (isVisible(div)) {
            div.classList.add('reveal_active') 
        } else {
            div.className = 'reveal'
        }
      });
}

  showVisible();
  window.onscroll = showVisible;