const fontSizes = document.querySelectorAll('.font-size')

const textColor = document.querySelector('.book__control_color')
const childsTextColor = textColor.querySelectorAll('a')

const background = document.querySelector('.book__control_background')
const childsBackground = background.querySelectorAll('a')

function deactiveElement (elements, classActiv) {
    const listElements = Array.from(elements)
    const parent = elements[0].closest('.book__control')
    
    let index = listElements.indexOf(parent.querySelector(`.${classActiv}`))
    if (index != -1) {
        elements[index].classList.remove(classActiv)
    }
}

function activeElement (element, classActiv) {
    const book = element.closest('.book')
    element.classList.add(classActiv)
    
    if (element.dataset.textColor == 'black') {
        book.classList.remove('book_color-gray')
        book.classList.remove('book_color-whitesmoke')
        book.classList.add('book_color-black')
    }
    if (element.dataset.textColor == 'gray') {
        book.classList.remove('book_color-black')
        book.classList.remove('book_color-whitesmoke')
        book.classList.add('book_color-gray')
    }
    if (element.dataset.textColor == 'whitesmoke') {
        book.classList.remove('book_color-black')
        book.classList.remove('book_color-gray')
        book.classList.add('book_color-whitesmoke')
    }

    if (element.dataset.size == 'small') {
        book.classList.remove('book_fs-big')
        book.classList.add('book_fs-small')
    }
    if (element.dataset.size == 'big') {
        book.classList.remove('book_fs-small')
        book.classList.add('book_fs-big')
    }    

    if (element.dataset.bgColor == 'black') {
        console.log(element.dataset.bgColor)
        book.classList.remove('book_bg-gray')
        book.classList.remove('book_bg-white')
        book.classList.add('book_bg-black')
    }
    if (element.dataset.bgColor == 'gray') {
        console.log(element.dataset.bgColor)
        book.classList.remove('book_bg-black')
        book.classList.remove('book_bg-white')
        book.classList.add('book_bg-gray')
    }
    if (element.dataset.bgColor == 'white') {
        console.log(element.dataset.bgColor)
        book.classList.remove('book_bg-gray')
        book.classList.remove('book_bg-black')
        book.classList.add('book_bg-white')
    }
}

fontSizes.forEach(function(fontSize) {
    fontSize.addEventListener('click', (event) => {
        deactiveElement (fontSizes, 'font-size_active')
        activeElement (fontSize, 'font-size_active')
        event.preventDefault();
    }, false)
})

childsTextColor.forEach(function(textColor) {
    textColor.addEventListener('click', (event) => {
        deactiveElement (childsTextColor, 'color_active')
        activeElement (textColor, 'color_active')
        event.preventDefault();
    }, false)
})

childsBackground.forEach(function(background) {
    background.addEventListener('click', (event) => {
        deactiveElement (childsBackground, 'color_active')
        activeElement (background, 'color_active')
        console.log(childsBackground)
        event.preventDefault();
    }, false)
})




