let productsCountEl = document.getElementById("products-count");

let addToCartButtons = document.querySelectorAll(".button2");

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

//modal window

let moreDetailesButtons = document.querySelectorAll(".button1");
let modal = document.querySelector(".modal")
let buttonClose = document.querySelector(".btn-close");

moreDetailesButtons.forEach(function(btn) {
    btn.addEventListener("click",openModal)
})
function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function showModalByScroll() {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll)

buttonClose.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

// quantity 
let decrementButton = document.querySelectorAll(".decrement-button");
let incrementButton = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".quantity-input");

function toggleDecrementState(count) {
    if (count <= 1) {
        decrementButton.disabled = true;
    } else {
        decrementButton.disabled = false;
    }
}

function toggleIncrementState(count) {
    if (count >= 5) {
        incrementButton.disabled = true;
    } else {
        incrementButton.disabled = false;
    }
}

let currentCount = +productsQuantity.value;
toggleDecrementState(currentCount)
toggleIncrementState(currentCount)

incrementButton.forEach(function(i) {
    i.addEventListener("click", calcIncr)
})

decrementButton.forEach(function(i) {
    i.addEventListener("click", calcDecr)
})

function calcIncr() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;
    toggleDecrementState(nextCount)
    toggleIncrementState(nextCount)
}

function calcDecr() {
    let currentCount = +productsQuantity.value;
        let nextCount = currentCount - 1;
        productsQuantity.value = nextCount;
        toggleDecrementState(nextCount)
        toggleIncrementState(nextCount)
}

// AOS
AOS.init();
