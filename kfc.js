var forms = document.querySelectorAll('.add-Cart');

var foods = [
    {
        name : 'Strip Bucket',
        orderName: 'stripBucket',
        price :500,
        inCart : 0
    },
    {
        name :'Chizza',
        orderName:'chizza',
        price :279,
        inCart : 0
    },
    {
        name : 'Veg Zinger and Fries Combo ',
        orderName:'vegZingerAndFriesCombo',
        price :225,
        inCart : 0
    },
    {
        name : 'Chicken Rice Bowlz' ,
        orderName:'chickenRiceBowlz',
        price :150,
        inCart : 0
    },
    {
        name : 'Red Bull Energy Drink' ,
        orderName:'redBullEnergyDrink',
        price : 150,
        inCart : 0
    }

];

for(let i = 0 ; i < forms.length ; i++){
    // console.log( forms.length )
    // console.log(foods[i])
    forms[i].addEventListener('click',() => {
        console.log(foods[i])
        cartNumbers(foods[i]) ;     
      
    })
}
function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers')
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers ;
    }
}
function cartNumbers(food){

    var productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
  
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1 ;
    }else{
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.cart span').textContent = 1 ;
    }

    cartItems(food)
}
function cartItems(food){
    let cartItems = localStorage.getItem('foodInCart')
    cartItems = JSON.parse(cartItems)

    if(cartItems != null ){
        if(cartItems[food.orderName] == undefined ){
            cartItems = {
                ...cartItems,
                [food.orderName] : food
            }
        }
        cartItems[food.orderName].inCart += 1
    }else{
        food.inCart = 1
        cartItems = {
            [food.orderName] : food
        }
    }
    
   localStorage.setItem("foodInCart" , JSON.stringify(cartItems)) 
}


onLoadCartNumbers()