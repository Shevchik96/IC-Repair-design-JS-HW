let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.slider__img')
let leftBtn = document.querySelector('.button_slider-back')
let rightBtn = document.querySelector('.button_slider-next')
let litter = document.querySelectorAll('.mainH1')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')
litter[0].classList.add('styleh1')

let counter = 0;

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
            litter[k].classList.remove('styleh1')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
        litter[counter].classList.add('styleh1');
    })
}

leftBtn.addEventListener('click', ()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
        litter[k].classList.remove('styleh1')
    }
    counter--
    if (counter <0) {
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
    litter[counter].classList.add('styleh1');
})

rightBtn.addEventListener('click', ()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
        litter[k].classList.remove('styleh1')
    }
    counter++
    if (counter >= imageSlider.length) {
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
    litter[counter].classList.add('styleh1');
})

for(let i=0; i<litter.length; i++){
    litter[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
            litter[k].classList.remove('styleh1')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
        litter[counter].classList.add('styleh1');
    })
}

