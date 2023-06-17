

function laodproduct(url) {


    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const product = data.products;

            var cards = '';
            product.forEach(product => {
                //   console.log(product);

                stars = '';
                const ratings = Math.floor(+product.rating);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars += ' <i class="fa-solid fa-star"></i>'
                    }
                    else {
                        stars += ' <i class="fa-regular fa-star"></i>'
                    }
                }

                let isNewDiv = ' ';

                if (product.isNew === "TRUE") {
                    isNewDiv = '<span class = "new">New</span>'
                }

                cards += `  
<div class="Product col-sm-12  col-lg-4 col-md-6">
    <div class="product-cart product-hover ">
        <img src="images/${product.imageName}.png" alt="">
        <h6>${product.name}</h6>
        <div class="d-flex">
            <h6>Rs ${product.priceAfterDiscount} </h6>
            <h6 class=" line-though">Rs ${product.price}</h6>
            <h6>(60%off)</h6>
        </div>
        <div class="star d-fex">
          ${stars}
          ${Math.floor(+product.rating) + "/5"}
        </div>
         
    </div>
    <div class="add-cart d-flex ">
        <div class="img-1" onclick="cartFirst.addToWishlist('${encodeURI(JSON.stringify(product))}')"></div>
        <div id="" class="img-2" onclick="decrement(${product.id},${product.price})"> </div>
        <div  class="img-3" onclick="cart.addToCart('${encodeURI(JSON.stringify(product))}')"></div>
    </div>
    <div class="new">${isNewDiv}</div>
    </div>
    `

         
    // console.log(product)
    
          });
            document.getElementById("productListArea").innerHTML = cards

            // addToCart(product)
         
        });
        
    }
    
    let url = "https://gist.githubusercontent.com/Sundaram49/9b37e4917e1d5d1688a5649836b86d9b/raw/073292f18b63f7e6fcec3b35d0367e83d99d78f5/gistfile1.txt";
    laodproduct(url);




