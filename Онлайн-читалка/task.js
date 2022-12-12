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

function activeFontSize(element, classActiv) {
    const book = element.closest('.book')
    element.classList.add(classActiv)

    if (element.dataset.size == 'small') {
        book.classList.remove('book_fs-big')
        book.classList.add('book_fs-small')
    } else if (element.dataset.size == 'big') {
        book.classList.remove('book_fs-small')
        book.classList.add('book_fs-big')
    } else {
        book.classList.remove('book_fs-big')
        book.classList.remove('book_fs-small')
    }
}

function conditionHandling (classAdd, classRemove1, classRemove2) {
    book.classList.remove(classRemove1)
    book.classList.remove(classRemove2)
    book.classList.add(classAdd)
}

function activeElement (element, classActiv) {
    const book = element.closest('.book')
    element.classList.add(classActiv)
    
    if (element.dataset.textColor == 'black') {
        conditionHandling ('book_color-black', 'book_color-whitesmoke', 'book_color-gray')
    }
    if (element.dataset.textColor == 'gray') {
        conditionHandling ('book_color-gray', 'book_color-black', 'book_color-whitesmoke')
    }
    if (element.dataset.textColor == 'whitesmoke') {
        conditionHandling ('book_color-whitesmoke', 'book_color-black', 'book_color-gray')
    }

    if (element.dataset.bgColor == 'black') {
        conditionHandling ('book_bg-black', 'book_bg-white', 'book_bg-gray')
    }
    if (element.dataset.bgColor == 'gray') {
        conditionHandling ('book_bg-gray', 'book_bg-black', 'book_bg-white')
    }
    if (element.dataset.bgColor == 'white') {
        conditionHandling ('book_bg-white', 'book_bg-black', 'book_bg-gray')
    }
}

fontSizes.forEach(function(fontSize) {
    fontSize.addEventListener('click', (event) => {
        deactiveElement (fontSizes, 'font-size_active')
        activeFontSize (fontSize, 'font-size_active')
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




