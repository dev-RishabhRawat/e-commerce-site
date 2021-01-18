let product_name,product_price;
const ProductDescription = (e) =>{
//     console.log("price : " + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent);
//     console.log("name:" + this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
product_name = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
product_price = this.document.activeElement.previousElementSibling.previousElementSibling.previousElementSibling.lastElementChild.textContent;

}