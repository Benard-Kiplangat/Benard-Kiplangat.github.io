"use strict";

// Shoes //

const shoes = [{
  shoeID: 1,
  shoeName: "J1 Black",
  shoeDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur nostrum similique labore, eos fugit minus totam temporibus rem suscipit eius corrupti, maiores deserunt. Consectetur, et!",
  shoeImg: "images/image-product-1-thumbnail.jpg",
  shoeCompany: "Sneakers International",
  shoePrice: 50,
  shoeDiscount: 10
},
{
  shoeID: 2,
  shoeName: "J2 Black",
  shoeDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur nostrum similique labore, eos fugit minus totam temporibus rem suscipit eius corrupti, maiores deserunt. Consectetur, et!",
  shoeImg: "images/image-product-1-thumbnail.jpg",
  shoeCompany: "Sneakers International",
  shoePrice: 50,
  shoeDiscount: 10
},
{
  shoeID: 3,
  shoeName: "J3 Black",
  shoeDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur nostrum similique labore, eos fugit minus totam temporibus rem suscipit eius corrupti, maiores deserunt. Consectetur, et!",
  shoeImg: "images/image-product-1-thumbnail.jpg",
  shoeCompany: "Sneakers International",
  shoePrice: 50,
  shoeDiscount: 10
},
{
  shoeID: 4,
  shoeName: "J4 Black",
  shoeDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur nostrum similique labore, eos fugit minus totam temporibus rem suscipit eius corrupti, maiores deserunt. Consectetur, et!",
  shoeImg: "images/image-product-1-thumbnail.jpg",
  shoeCompany: "Sneakers International",
  shoePrice: 50,
  shoeDiscount: 10
},
{
  shoeID: 5,
  shoeName: "J5 Black",
  shoeDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aspernatur nostrum similique labore, eos fugit minus totam temporibus rem suscipit eius corrupti, maiores deserunt. Consectetur, et!",
  shoeImg: "images/image-product-1-thumbnail.jpg",
  shoeCompany: "Sneakers International",
  shoePrice: 50,
  shoeDiscount: 10
}];

// /////////// Tab component

let shoeContainer = document.querySelector(".shoes");
let shoeItems = "";

shoes.forEach((el) => elemCreator(el));

function elemCreator(el) {
  shoeItems += `<div class="shoe">
  <img src="${el.shoeImg}" class="product-image-small" alt="shoes">
  <div class="shoename">${el.shoeName}</div>
  <div class="sprice">$${el.shoePrice} <span>${el.shoeDiscount}%</span></div>
  <button  id="${el.shoeID}" class="cartbtn">
    Add to cart
  </button>
</div>`
}

shoeContainer.innerHTML = shoeItems;

const tabBox = document.querySelector(".operation-tab-box");
const tabImage = document.querySelectorAll(".product-image-small");
const contentImage = document.querySelectorAll(".product-image");

tabBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".product-image-small");
  if (!clicked) return;

  //   remove active class
  tabImage.forEach((el) => el.classList.remove("active-small"));
  contentImage.forEach((el) => el.classList.remove("active"));

  //add active class
  clicked.classList.add("active-small");
  document
    .querySelector(`.operation-content-${clicked.dataset.tab}`)
    .classList.add("active");
});

function removeOvarlay() {
  ovarlayCart.classList.remove("d-block");
  ovarlayCart.classList.remove("height");
}
//  product number functionality

const number = document.querySelector(".number-box");
const quantity = document.querySelector("#quanity");
let productQuantity = 0;

//
number.addEventListener("click", function (e) {
  removeOvarlay();

  productQuantity = Number(quantity.textContent);
  if (!e.target.alt) return;
  else if (e.target.alt === "icon-plus") {
    productQuantity++;
    quantity.textContent = productQuantity;
  } else if (
    e.target.alt === "icon-minus" &&
    Number(quantity.textContent) > 0
  ) {
    productQuantity--;
    quantity.textContent = productQuantity;
  }
});

// Add to cart button functionality

const btn = document.querySelectorAll(".btn");
const cartBtn = document.querySelectorAll(".cartbtn");
const productNumber = document.querySelector(".product-number");
const emptyContent = document.querySelector(".cart-content-empty");
const fullContent = document.querySelector(".cart-content-full");
const cartContainer = document.querySelector(".cart-item-content");

function generalStyle() {
  productQuantity += 1;
  productNumber.textContent = productQuantity;
  productNumber.classList.remove("d-block");
  emptyContent.classList.add("show");
  fullContent.classList.remove("show");
}
// Add to cart button functionality
//

let itemHTML = document.querySelector(".cart-item-content");
let cartTotal = 12;
let cartTotalContainer = document.querySelector("#cartTotal");

btn.forEach((el) => btnEventer(el));
cartBtn.forEach((el) => btnEventer(el));

function btnEventer (el) {
  el.addEventListener("click", function (e) {
    productNumber.textContent = productQuantity;

    generalStyle();
    let shoeElemID = Number(el.id);
    let shoe = shoes[shoeElemID];
      productNumber.classList.add("d-block");
      emptyContent.classList.remove("show");
      fullContent.classList.add("show");

      itemHTML = `<div class="cartItemInfo center">
      <img class="cartItemImg" src="${shoe.shoeImg}" alt="shoe">
      <div class="cartItemPriceinfo">
        <span class="cartItemTitle">${shoe.shoeName}</span><span class="cartItemTotal">$${shoe.shoePrice}</span>
      </div>
      <img src="images/icon-delete.svg" alt="icon-delete" class="delete-icon" id="${shoe.shoeID}">
    </div>`
    cartContainer.innerHTML += itemHTML;
    cartTotal = shoe.shoePrice;
    cartTotal += Number(cartTotalContainer.textContent);
    cartTotalContainer.textContent = cartTotal;

      // delete icon functionality
      document
        .querySelector(".delete-icon")
        .addEventListener("click", function (e) {
          quantity.textContent = 0;
          productQuantity = 0;
          generalStyle();
        });
    removeOvarlay();
  });
};

// cart icon functionality

const cartIcon = document.querySelector(".h-logo");
const ovarlayCart = document.querySelector(".ovarlay-cart");

cartIcon.addEventListener("click", function (e) {
  ovarlayCart.classList.toggle("d-block");
  ovarlayCart.classList.toggle("height");
});

///////////////////////////////////////
// Icon Menu button functionality
///////////////////////////////////////

const iconMenu = document.querySelector(".icon-menu");
const iconCross = document.querySelector(".cross-icon");
const mainNav = document.querySelector(".main-nav-list");
iconMenu.addEventListener("click", function (e) {
  mainNav.classList.add("open");
  document.querySelector(".bg").classList.add("bg-color");
});
iconCross.addEventListener("click", function () {
  mainNav.classList.remove("open");
  document.querySelector(".bg").classList.remove("bg-color");
});
