function addtoCart(){
        
}
function checkOut(){
    
}

try{
    addtoCart("Laptop",1200,2)//should throw an error :"Product name required"
    addtoCart("",30,-1)//should throw an error:"Invalid product price"
    addtoCart("Mouse,-15,3");//should throw an error:"Invalid quantity"
    addtoCart("Keyboard",50,"abc")//should throw an error :"Invalid quantity"
    checkOut()

}
catch(error){
    console.log(error.message);
}