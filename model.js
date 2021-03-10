const modelBtn = document.querySelector(".model-btn");
const model = document.querySelector(".model-overlay");
const closeBtn = document.querySelector(".close-btn");

modelBtn.addEventListener("click", function(){
    model.classList.add("open-model");
})
closeBtn.addEventListener("click", function(){
    model.classList.remove("open-model");
})