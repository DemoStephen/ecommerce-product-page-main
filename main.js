const decreaseCount = document.querySelector('[data-decreaseCount]');
const count = document.querySelector('[data-count]');
const increaseCount = document.querySelector('[data-increaseCount]');
const price = document.querySelector('[data-price]');
const fixedPrice = document.querySelector('[data-fixedPrice]')
let counter = +count.innerText;
function plusAndMinus(){
    let calculatePrice = ()=>{
        if(counter === 0){
            return
        }
        let pricing = 125*counter;
        let fixedpricing = 250*counter;
        price.innerText = `$${pricing}.00`
        fixedPrice.innerText = `$${fixedpricing}.00`
    }
    decreaseCount.addEventListener('click', (event)=>{
        event.preventDefault()
        if(counter === 0){
            return counter = 1;
        }
        counter -=1
        calculatePrice()
        return count.innerText = counter;
    })
    increaseCount.addEventListener('click', (event)=>{
        event.preventDefault()
        counter +=1
        calculatePrice()        
        return count.innerText = counter;
    })
}
plusAndMinus()

const imageThumbnails = document.querySelectorAll('[data-imageThumbnail]');
imageThumbnails.forEach((imageThumbnail)=>{
    imageThumbnail.addEventListener('click', ()=>{
        imageThumbnail.style.border = '2px solid var(--Orange)'
    })
})
