const myBulb = document.querySelector('#myBulb')
const on = document.querySelector('#on')
const off = document.querySelector('#off')

on.addEventListener('click', () => {
    myBulb.src = 'images/on.png'
})
off.addEventListener('click',()=>{
    myBulb.src='images/off.png'
})
