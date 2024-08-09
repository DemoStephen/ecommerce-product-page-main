const sideBar = document.querySelector('[data-sideBar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');
const decrementBtn = document.querySelector('[data-decrementBtn]');
const quantity = document.querySelector('[data-quantity]');
const incrementBtn = document.querySelector('[data-incrementBtn]');
let actualValue = +quantity.innerText;
price = document.querySelector('[data-price]');
discount = document.querySelector('[data-discount]');
// This block of code contain an event listener that shows the sideBar on a mobile screen
openSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    sideBar.classList.remove('d-none')
})
// This block of code contain an event listener that hides the sideBar on a mobile screen
closeSideBar.addEventListener('click', (event)=>{
    event.preventDefault();
    if(sideBar.classList.contains('d-block')){
        sideBar.classList.remove('d-block')
    }
    sideBar.classList.add('d-none')
})
// This block of code contain an event listener that decreases the amount of product users want
decrementBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if(actualValue === 0){
        actualValue = 0;
    }else{
        actualValue -=1
    }priceCalculator()
    return quantity.innerText = actualValue
})
// This block of code contain an event listener that increases the amount of product users want
incrementBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    actualValue +=1
    priceCalculator()
    return quantity.innerText = actualValue
})

// This a function that calculate the price of the product related to the quantity selected by users
const priceCalculator = ()=>{
    if(actualValue === 0){
        price.innerText = '$125.00'
        discount.innerText = '$250.00'
    }else{
        price.innerText = `$${actualValue * 125}.00`
        discount.innerText = `$${actualValue * 250}.00`
    }
}
// This is my photo gallery section. I need help here. Its take time for my image to load.
const imageThumbnail = document.querySelectorAll('[data-imageThumbnail]');
const banner = document.querySelector('[data-banner]');
const bannerGallery = [
    {src:'./images/image-product-1.jpg'},
    {src:'./images/image-product-2.jpg'},
    {src:'./images/image-product-3.jpg'},
    {src:'./images/image-product-4.jpg'}
]
for(let i = 0; i < imageThumbnail.length; i++){
    imageThumbnail[i].addEventListener('click', (event)=>{
        banner.innerHTML = `<img data-imageThumbnail="imageThumbnail" src="${bannerGallery[i].src}" alt="image product" class="width borderRadius">`;
    })
}