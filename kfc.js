var forms = document.querySelectorAll('.addCart')

var products = [
    {
        name : "Strip Bucket",
        tag: "stripBucket",
        price :500,
        inCart : 0
    },
    {
        name :" Chizza" ,
        tag:"chizza",
        price :279,
        inCart : 0
    },
    {
        name : "Veg Zinger and Fries Combo ",
        tag:"vegZingerAndFriesCombo",
        price :225,
        inCart : 0
    },
    {
        name : "Chicken Rice Bowlz" ,
        tag:"chickenRiceBowlz",
        price :150,
        inCart : 0
    },
    {
        name : "Red Bull Energy Drink" ,
        tag: "redBullEnergyDrink",
        price : 150,
        inCart : 0
    }
]
for(var i = 0 ; i < forms.length ; i++){
    forms[i].addEventListener('click',() => {
        cartNumbers()
    })
}

function cartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
  
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
    }else{
        localStorage.setItem('cartNumbers',1)
        
    }

    
}