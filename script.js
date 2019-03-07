// (new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: 'NGN'
//   })).format(4000)
buy=[
    puffpuff={
        name:"Puff-Puff",
        unit_price:10,
        quantity:0,
        price:0
    },
    akara={
        name:"Akara",
        unit_price:10,
        quantity:0,
        price:0
    },
    potato={
        name:"Potato",
        unit_price:10,
        quantity:0,
        price:0
    },
    yam={
        name:"Yam",
        unit_price:10,
        quantity:0,
        price:0
    },
    dodo={
        name:"Dodo",
        unit_price:20,
        quantity:0,
        price:0
    },
    kpomo={
        name:"Kpomo",
        unit_price:50,
        quantity:0,
        price:0
    },
    chicken={
        name:"Chicken",
        unit_price:100,
        quantity:0,
        price:0
    },
    fish={
        name:"Fish",
        unit_price:50,
        quantity:0,
        price:0
    },
    buns={
        name:"Buns",
        unit_price:10,
        quantity:0,
        price:0
    }
] 

// var itemsdiv=document.getElementsByClassName('buy__item');

itemsimg=["img/Puff-Puff.png","img/akara.jpg", "img/potato.jpg", "img/potato.jpg", "img/dodo.jpg", "img/kpomo.jpg", "img/chicken.jpg", "img/chicken.jpg", "img/Puff-Puff.png"];
itemsnamelist=["puffpuff","akara","potato","yam","dodo","kpomo","chicken","fish","buns"];

// buylist=document.getElementsByClassName("buy");
// for(i=0; i<itemsnamelist.length; i++){
//    document.getElementsByClassName("buy")[0].appendChild(itemsdiv);
// }


itemslist=document.getElementsByClassName("buy__item");
for(let i=0; i<itemslist.length; i++){
    document.getElementsByClassName("buy__item--img")[i].style.background+=`url(${itemsimg[i]})`;
    document.getElementsByClassName("buy__item--title")[i].innerHTML=buy[i].name;
    document.getElementsByClassName("buy__item--price")[i].innerHTML=`${(new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
      })).format(buy[i].unit_price)} each`;
    document.getElementsByClassName("buy__item--qty")[i].innerHTML=buy[i].quantity;
    //value placeholders for initial buy__items components
}

for(let i=0; i<itemsnamelist.length; i++){
    document.getElementsByClassName("buy__item--minus")[i].addEventListener("click",()=> {
        if(buy[i].quantity===0){}
        else{
            buy[i].quantity--;
            document.getElementsByClassName("buy__item--qty")[i].innerHTML=buy[i].quantity;
        }
    });//subtracting quantity
    document.getElementsByClassName("buy__item--plus")[i].addEventListener("click",()=> {
        buy[i].quantity++;
        document.getElementsByClassName("buy__item--qty")[i].innerHTML=buy[i].quantity;
    });//adding quantity
}

for(let i=0; i<itemslist.length; i++){
    // let checkout_items = document.createElement("div");
    // checkout_items.classList.add("checkout__details--item")
    // document.getElementsByClassName("checkout__details").appendChild(checkout_items);
}


for(let i=0; i<itemslist.length; i++){
    document.getElementsByClassName("buy__item--cart")[i].addEventListener("click", 
()=>{
    if(buy[i].quantity>0){
        let quantity = buy[i].quantity;
        buy[i].price = quantity*buy[i].unit_price;
        document.getElementsByClassName("checkout__details--item")[i].innerHTML = `${quantity} piece(s) of ${buy[i].name}, ${buy[i].price}`;      
        document.getElementsByClassName("buy__item--cart")[i].classList.add("buy__item--cart--added");
    } else{}
        let sumtotal=0;
    for(let j=0; j<itemslist.length; j++){
                    sumtotal+=buy[j].price;  
                }
                document.getElementsByClassName("checkout__details--price")[0].innerHTML = `${sumtotal}`;
})
document.getElementsByClassName("buy__item--reset")[i].addEventListener("click", ()=>{
    buy[i].quantity=0;
    document.getElementsByClassName("checkout__details--price")[0].innerHTML-=buy[i].price;
    buy[i].price=0;
    document.getElementsByClassName("buy__item--qty")[i].innerHTML=buy[i].quantity;
    document.getElementsByClassName("buy__item--cart")[i].classList.remove("buy__item--cart--added");
    document.getElementsByClassName("checkout__details--item")[i].innerHTML='';
})
}
