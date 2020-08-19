let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".button2")[0];

for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function(){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}
addToCartButtons.addEventListener("click", function(e) {
    let current = e.target;
    console.log(current)
    current.style.backgroundColor = "red"
})

let likeButtons = document.querySelectorAll(".like");


for(let i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener("click", function() {
                this.classList.toggle("liked")
            })
 }

//  slider
$(".slider-block").slick({
    dots:true,
})