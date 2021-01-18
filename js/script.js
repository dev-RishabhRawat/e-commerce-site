let product_name,product_price;
const ProductDescription = (e) =>{
//     console.log("price : " + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent);
//     console.log("name:" + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
product_name = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
product_price = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent;
document.getElementById('products-container').style.display = "none";
document.getElementById('product-descrition').style.display = "flex";
document.getElementById('header').style.display = "none";
document.getElementById('product-name').innerHTML = product_name;
document.getElementById('product-price').innerHTML = product_price;
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;

}