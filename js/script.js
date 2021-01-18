let product_name,product_price;
const ProductDescription = (e) =>{
//     console.log("price : " + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent);
//     console.log("name:" + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
//    src: console.log(this.document.activeElement.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('src'));
product_name = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
product_price = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent;
document.getElementById('products-container').style.display = "none";
document.getElementById('product-descrition').style.display = "flex";
document.getElementById('header').style.display = "none";
document.getElementById('product-name').innerHTML = product_name;
document.getElementById('product-price').innerHTML = product_price;
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
let imgSrc = this.document.activeElement.parentElement.parentElement.firstElementChild.firstElementChild.getAttribute('src');
let img = document.getElementsByClassName('product-image');
img[0].src = `${imgSrc}`;
img[1].src = `${imgSrc}`;


}