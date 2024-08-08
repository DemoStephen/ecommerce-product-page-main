const sideBar = document.querySelector('[data-sideBar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');
const decrementBtn = document.querySelector('[data-decrementBtn]');
const quantity = document.querySelector('[data-quantity]');
const incrementBtn = document.querySelector('[data-incrementBtn]');
let actualValue = +quantity.innerText;
price = document.querySelector('[data-price]');
discount = document.querySelector('[data-discount]');

openSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    sideBar.classList.remove('d-none')
})
closeSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    if(sideBar.classList.contains('d-block')){
        sideBar.classList.remove('d-block')
    }
    sideBar.classList.add('d-none')
})

decrementBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(actualValue === 0){
        actualValue = 0;
    }else{
        actualValue -=1
    }priceCalculator()
    return quantity.innerText = actualValue
})
incrementBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    actualValue +=1
    priceCalculator()
    return quantity.innerText = actualValue
})

const priceCalculator = ()=>{
    if(actualValue === 0){
        price.innerText = '$125.00'
        discount.innerText = '$250.00'
    }else{
        price.innerText = `$${actualValue * 125}.00`
        discount.innerText = `$${actualValue * 250}.00`
    }
}

const imageThumbnail = document.querySelectorAll('data-imageThumbnail');
let imageGallery = [
    {src: './images/image-product-1.jpg', alt: 'image product 1'},
    {src: './images/image-product-2.jpg', alt: 'image product 2'},
    {src: './images/image-product-3.jpg', alt: 'image product 3'},
    {src: './images/image-product-4.jpg', alt: 'image product 4'}
]

for(let i = 0; i < imageThumbnail.length; i++){
    console.log(imageThumbnail[i])
}
