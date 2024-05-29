const modalBtn=document.querySelector("button");
const closeBtn=document.querySelector("span");
const modalContent=document.querySelector(".modal-content");
console.log(modalBtn)
console.log(closeBtn)
modalBtn.addEventListener("click",function(){
    modalContent.style.visibility="visible"
})
closeBtn.addEventListener("click",function(){
    modalContent.style.visibility="hidden"

})