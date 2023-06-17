

function renderCartItems(){
    const cartItems = cartFirst.getAllItems();

    let totalPrice = 0;
    let totalDiscount = 0;

    const cards = cartItems.reduce((prev, curr) => {

        totalPrice += +curr.price * curr.qty;

        totalDiscount += (+curr.price - +curr.priceAfterDiscount) * curr.qty;

    return prev + `
    <div class="storArea" di="stor-area">
                <div class="datails">
                    <div class="cart-detail" id="sundar">
                        
                    <div class="flex">
                        <img src="images/${curr.imageName}.png" alt="">
                       <div> <h3>${curr.name}</h3>
                        <p>Color: red</p>
                        <p>Sold-by:rohit </p>
                        <div class="select-items">
                         <div class="select" name="" id="">
                         <i class="fa-solid fa-minus" onclick="decreementQty(${curr.id})"></i>
                        <span style="margin:20px;">${curr.qty}</span>
                         <i class="fa-solid fa-plus"onclick="increementQty(${curr.id})"></i>
                            </div>
                        </div></div></div>
                    </div>
                    <div class="left">
                        <h5>Rs-${curr.priceAfterDiscount}</h5>
                        <div class="d-flex">
                        <h4 class="line-though">Rs ${curr.price} </h4><span>(60% off)</span>
                       </div> <p>Deliver in 4-6 days</p>
                    </div>
                </div>
                <hr>
                <button  onclick="cartFirst.removeFromCart(${curr.id})"  >Remove</button><span>|</span>
                <button>Move to Wishlist</button>
              </div>`
}, ''); 
    // console.log('helloo')
    document.getElementById('cardArea').innerHTML=cards;
    document.getElementById('price').innerHTML = Math.floor(totalPrice);
    document.getElementById('discount').innerHTML = Math.floor(totalDiscount);
    document.getElementById('final-price').innerHTML = Math.floor(totalPrice - totalDiscount);
    document.getElementById('total-price').innerHTML = Math.floor(totalPrice - totalDiscount);

    // document.getElementById('').innerHTML = Math.floor(totalPrice - totalDiscount);
   
}

function increementQty(id){
    cartFirst.increementQty(id);
    renderCartItems();
}

function decreementQty(id){
    cartFirst.decreementQty(id);
    renderCartItems();
}

function removeFromCart(id){
    cartFirst.removeFromCart(id);
    console.log("hello")
    renderCartItems();
}

renderCartItems();