const heroImg = document.querySelector(".hero-img")
const hamBtn = document.querySelector("#hambtn")
const navList = document.querySelector(".nav-list")
const closeBtn = document.querySelector(".close")
const header = document.querySelector(".header")
const lightHero = document.querySelector(".light-main-hero")

window.addEventListener("scroll", () => {
    const headHeight = header.getBoundingClientRect().height
    const pageheight = window.pageYOffset
    if (pageheight > headHeight) {
        header.classList.add("sticky-head")
    } else {
        header.classList.remove("sticky-head")
    }
})

window.addEventListener("DOMContentLoaded", () => {
    heroImg.src = heroImages[0]
    lightHero.src = heroImages[0]
})

hamBtn.addEventListener("click", () => {
    navList.classList.add("show-list")
})

closeBtn.addEventListener("click", () => {
    navList.classList.remove("show-list")
})

let i = 0

const heroImages = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]

const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

prevBtn.addEventListener("click", () => {
    i--
    if (i < 0) {
        i = heroImages.length - 1
    }
    heroImg.src = heroImages[i]
})

nextBtn.addEventListener("click", () => {
    i++
    if (i > heroImages.length - 1) {
        i = 0
    }
    heroImg.src = heroImages[i]
})

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const totalUnit = document.getElementById("total-unit")
let j = 0

plus.addEventListener("click", () => {
    j++
    totalUnit.innerHTML = `<p>${j}</p>`
})

minus.addEventListener("click", () => {
    j--
    if (j < 0) {
        j = 0
    }
    totalUnit.innerHTML = `<p>${j}</p>`
})

const unitCount = document.querySelector("#unit-count")
const cartBtn = document.querySelector(".purchase")
cartBtn.addEventListener("click", () => {
    totalUnit.innerHTML = `<p>${j}</p>`
    unitCount.innerText = `${j}`
    if (j === 0) {
        unitCount.innerText = ""
    }
})

const cart = document.querySelector(".cart")
const basket = document.querySelector(".basket")
const basketItems = document.querySelector(".basket-items")
const price = 125

cart.addEventListener("click", () => {
    basket.classList.toggle("show-basket")
    let emptyContent = `<p>Your cart is empty</p>`
    let filledBasket = `
    <div class="purchased-item">
        <img src="./images/image-product-1-thumbnail.jpg" alt="item-thumbnail" class="item-thumbnail">
        <div class="text">
            <p>Autumn Limited Edition...</p>
            <p>$${price}.00 x ${j} <span>$${price * j}.00</span></p>
        </div>
        <button id="delete" role="button"><img src="./images/icon-delete.svg" alt="" ></button>
    </div>
    <div class="checkout-house">
        <button class="checkout">Checkout</button>
    </div>
    `
    let deleteBtn = ""
    let checkoutBtn = ""
    if (j === 0) {
        basketItems.innerHTML = emptyContent
    } else {
        basketItems.innerHTML = filledBasket
        deleteBtn = document.getElementById("delete")

        deleteBtn.addEventListener("click", () => {
            basketItems.innerHTML = emptyContent
            unitCount.innerText = ""
            j = 0
            totalUnit.innerHTML = `<p>0</p>`
            setTimeout(() => {
                basket.classList.remove("show-basket")
            }, 1000)            
        })

        checkoutBtn = document.querySelector(".checkout")
        checkoutBtn.addEventListener("click", () => {
            basketItems.innerHTML = `<p class="complete-purchase">Purchase completed</p>`
            let purchaseText = document.querySelector(".complete-purchase")
            purchaseText.style.color ="green"
            unitCount.innerText = ""
            j = 0
            totalUnit.innerHTML = `<p>0</p>`
            setTimeout(() => {
                basket.classList.remove("show-basket")
            }, 1000)
        })
    }
})

const modal = document.querySelector(".light-box")
const modalClose = document.querySelector("#modal-close")

modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})

heroImg.addEventListener ("click", () => {
    modal.style.display = "block"
})

const thumbs = document.querySelectorAll(".thumb-img")

function thumbChange(num) {
    thumbs[num].addEventListener("click", () => {
        heroImg.src = heroImages[num]
        thumbs.forEach((thumb) => {
            thumb.style.opacity = "1"
        })
        thumbs[num].style.opacity = "0.5"
    })
}

for (let k = 0; k < thumbs.length; k++) {
    thumbChange(k)
}

const lightThumbs = document.querySelectorAll(".light-thumb-img")
console.log(lightThumbs)

function lightThumbChange(num) {
    lightThumbs[num].addEventListener("click", () => {
        lightHero.src = heroImages[num]
        lightThumbs.forEach((thumb) => {
            thumb.style.opacity = "1"
        })
        lightThumbs[num].style.opacity = "0.5"
    })
}

for (let l = 0; l < thumbs.length; l++) {
    lightThumbChange(l)
}