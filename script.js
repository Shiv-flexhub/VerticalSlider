const sliderContainer = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.left-slide')
const slideRight = document.querySelector('.right-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlidesLength = 0

slideLeft.style.top = `-${(slidesLength-1)*100}vh`
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) =>{
    let sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight)

    if(direction === 'up')
    {
        activeSlidesLength++
        if(activeSlidesLength > slidesLength-1){
            activeSlidesLength=0
        }
    }
    else if(direction === 'down')
    {
        activeSlidesLength--
        if(activeSlidesLength < 0){
            activeSlidesLength=slidesLength-1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlidesLength * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlidesLength * sliderHeight}px)`
}