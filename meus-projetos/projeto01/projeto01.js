const navbar =document.querySelector('.navbar')
const allLi =document.querySelectorAll('li')

allLi.forEach((li, projeto01) =>{
    li.addEventListener("click", e => {
     navbar.querySelector(".active-list").classList.remove("active-list")
     li.classList.add("active-list")

     const indicator = document.querySelector(".indicator")
     indicator.style.transform = `translateX(calc(${projeto01*90}px))`
        
    })
})