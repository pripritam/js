export let cart=JSON.parse(localStorage.getItem('cart'));

   if(!cart){
    cart=[{
        productid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2
    },{
        productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1
    }]; 
 
  }  //expoert can use this file outside this file}

function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


export function addtocart(productid){
    let matchingitem;
        cart.forEach((cartitem)=>{
            if(productid===cartitem.productid){
                matchingitem=cartitem;
            }
        });
        if(matchingitem){   //    means value is true
            matchingitem.quantity+=1;
        }
        else{
        cart.push({
            productid:productid,
            quantity:1
        })}

        savetostorage();


}



 export function removefromcart(productid){
    const newcart=[];
    cart.forEach((cartitem)=>{
        if(cartitem.productid !==productid){
            newcart.push(cartitem);
        }

    });

    cart=newcart;
    savetostorage();
}
