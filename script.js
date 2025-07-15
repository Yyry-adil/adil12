const burger=document.querySelector(".burger")
const headerNav=document.querySelector(".header__nav")
const headerList=document.querySelector(".header__list")
burger.onclick =()=>{
    burger.classList.toggle("active")
    headerNav.classList.toggle("active")
    headerList.classList.toggle("active")
    
}
