/* parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
stringify(): Accepts an object as a parameter, and returns the equivalent JSON string. 

array.filter(function(currentValue, index, arr), thisValue)
Parameter	Description
function()	Required.
            A function to run for each array element.
currentValue	Required.
            The value of the current element.
index	Optional.
            The index of the current element.
arr	Optional.
            The array of the current element.
thisValue	Optional. Default undefined
            A value passed to the function as its this value.
            
JSON.stringify() -> To store the data in text format.
JSON.parse() -> To retrieve the data back in Javascript object*/


const cart = {
    addToCart: function(product){
        let newProduct = product;
        if(typeof product === "string"){
            newProduct = JSON.parse(decodeURI(product));
        }
        // console.log("hello"+product)

        const myCartItems = this.getAllItems()
        const filteredItem = myCartItems.filter(item => item.id === newProduct.id);

        if(filteredItem.length == 1){
            filteredItem[0].qty += 1;
        }else{
            myCartItems.push({
                ...newProduct,
                qty: 1
            });
            // console.log("hello")
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },
    removeFromCart: function(id){
        const myCartItems = this.getAllItems();
        console.log(myCartItems);
        const filteredItem = myCartItems.filter(item => item.id != id);
     console.log( filteredItem )
        localStorage.setItem('MY_CART', JSON.stringify(filteredItem));
    },
    
    getAllItems: function(){
        return JSON.parse(localStorage.getItem('MY_CART')) || [];
    },
    removeAllItems: function(){
        // console.log("hello2");
        localStorage.removeItem('MY_CART');
    },
    increementQty: function(id){
        const myCartItems = this.getAllItems();

        const filteredItem = myCartItems.filter(item => item.id == id);

        if(filteredItem.length == 1 && filteredItem[0].qty<10){
            filteredItem[0].qty += 1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    },
    decreementQty: function(id){
        const myCartItems = this.getAllItems();

        const filteredItem = myCartItems.filter(item => item.id == id);

        if (filteredItem.length === 1 && filteredItem[0].qty > 1 ){
            filteredItem[0].qty -= 1;
        }

        localStorage.setItem('MY_CART', JSON.stringify(myCartItems));
    }
}
// export default cart;
