const modalBtn = document.querySelectorAll(".modal-btn")[0];
const modal = document.querySelectorAll(".modal-overlay")[0];
const closeBtn = document.querySelectorAll(".close-btn")[0];

modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");
})
closeBtn.addEventListener("click", function(){
    modal.classList.remove("open-modal");
})