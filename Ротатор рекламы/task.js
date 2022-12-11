const rotators = document.querySelectorAll('.rotator__case')

function activeRotator (rotatorsData) {
    let listRotators = Array.from(rotatorsData),
    len = listRotators.length,
    indexPastActive = listRotators.indexOf(document.querySelector('.rotator__case_active')),
    
    indexNew = indexPastActive + 1
    if (indexNew > len - 1) {
        indexNew = indexNew - len
    }

    rotatorsData[indexPastActive].classList.remove('rotator__case_active')
    rotatorsData[indexNew].classList.add('rotator__case_active')

    rotatorsData[indexNew].style.color = rotatorsData[indexNew].dataset.color
    setTimeout(() => {activeRotator(rotators)}, rotatorsData[indexNew].dataset.speed)
}

activeRotator (rotators)