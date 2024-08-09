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

const imageThumbnail = document.querySelectorAll('[data-imageThumbnail]');
const banner = document.querySelector('[data-banner]');
const bannerGallery = [
    {src:'./images/image-product-1.jpg'},
    {src:'./images/image-product-2.jpg'},
    {src:'./images/image-product-3.jpg'},
    {src:'./images/image-product-4.jpg'}
]
bannerGallery.forEach((gallery) => {
    console.log(gallery)
});

imageThumbnail.forEach((thumbnail) => {
    
    thumbnail.addEventListener('click', (event)=>{
        event.preventDefault();

        banner.innerHTML = `<img data-imageThumbnail="imageThumbnail" src="${bannerGallery[i].src}" alt="image product" class="width borderRadius">`;
    })  
})