const publickLeft = document.querySelector('#pudlick-left');
const publickRight = document.querySelector('#pudlick-right');
const publickSlide = document.querySelectorAll('.publick-slide');
const circles = document.querySelectorAll('.dots-pagination');
let publickPosition = 0;
let widthPublick = document.querySelector('.publick-slider').clientWidth;
let currentActive = 1;
publickRight.addEventListener('click', ()=>{
    publickPosition += widthPublick;
    currentActive ++;
    if (currentActive > circles.length){
        currentActive = 1;
    }
    update();
    if (publickPosition > widthPublick * 2) {
        publickPosition = 0;
    }
    publickSlide.forEach((item)=>{
        item.style.left = -publickPosition + 'px';
    })
})
publickLeft.addEventListener('click', ()=>{
    publickPosition -= widthPublick;
    currentActive -= 1;
    if (currentActive === 0) {
        currentActive = 3
    };
    update();
    if (publickPosition < 0) {
        publickPosition = widthPublick * 2;
    }
    publickSlide.forEach((item)=>{
        item.style.left = -publickPosition + 'px';
    })
})
function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circles.forEach((item)=>{
                item.classList.remove('active-pag');
            })
            circle.classList.add('active-pag');
        }
    }
)}

const horsSlider = document.querySelector('.horse-slider');
const horsSlide = document.querySelectorAll('.horse-slide');
const horsLeft = document.querySelector('#hors-left');
const horsRight = document.querySelector('#hors-right');
let horsePosition = 0;
let widthHors = document.querySelector('.horse-slide').offsetWidth;


horsRight.addEventListener('click', ()=>{
   horsePosition += widthHors + 17;
   if (horsePosition > widthHors * 8){
    horsePosition = 0
   }
   horsSlide.forEach((item)=>{
    item.style.left = -horsePosition + 'px';
   })
})
horsLeft.addEventListener('click', ()=>{
    horsePosition -= widthHors + 17
    if (horsePosition < 0){
     horsePosition = widthHors * 8
    }
    horsSlide.forEach((item)=>{
     item.style.left = -horsePosition + 'px';
    })
 })


 const btnMenu = document.querySelector('.menu-btn');
 const closeBtn = document.querySelector('.mobile-close');
 const mobileMenu = document.querySelector('.mobile-menu');

 btnMenu.addEventListener('click', ()=> {
    mobileMenu.style.display = 'flex';
 })
 closeBtn.addEventListener('click', ()=> {
    mobileMenu.style.display = 'none';
 })