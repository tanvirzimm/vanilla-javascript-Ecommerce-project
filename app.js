const products = document.querySelector('.products');
const cartContainer = document.querySelector('.cart-items-container')


const addToCart = (name,price) => {


 const array_Of_Cart_Items = Array.prototype.slice.call(cartContainer.children );

 let exist = false;
 
 array_Of_Cart_Items.forEach(element => {
    
    
    if(element.children[0].innerText === name)
    {
     exist = true;



    let quantity = parseFloat(element.children[2].innerText);
    quantity++;
    element.children[2].innerText = quantity;


     let total = parseFloat(element.children[3].innerText);
    total = total + parseFloat(price);
    element.children[3].innerText = total;

    }
    
    });
    
   
    
    
    if(exist === false){
        addNew(name,price);
    }




}




const addNew = (name,price) => {
    const cartItem = document.createElement('div');
cartItem.classList.add('cart-item');

const nameTag = document.createElement('h4');
nameTag.innerText = name;
cartItem.append(nameTag);

const priceTag = document.createElement('h4');
priceTag.innerText = price;
cartItem.append(priceTag);

const quantityTag = document.createElement('h4');
quantityTag.innerText = 1;
cartItem.append(quantityTag);

const totalTag = document.createElement('h4');
totalTag.innerText = price;
cartItem.append(totalTag);

const cancelTag = document.createElement('h4');
const cancelSpanTag = document.createElement('span');
cancelSpanTag.innerText = 'X';
cancelSpanTag.classList.add('cancel')

cancelTag.append(cancelSpanTag);

cartItem.append(cancelTag);

cartContainer.append(cartItem);

}





//Event listeners
products.addEventListener('click',(e)=>{
    if(e.target.classList[0] === 'add'){
        
        let price = e.target.previousElementSibling.childNodes[1].innerText;
        let name = e.target.parentNode.children[1].innerText;
        
        addToCart(name,price);
        
    }
})


cartContainer.addEventListener('click',(e)=>{
        if(e.target.classList[0] === 'cancel'){
            e.target.parentNode.parentNode.remove();
        }
})

