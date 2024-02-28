try{
    processPayment(50.25,"1234-5678-9012-3456","12/25");//should an throw:"
   // Invalid payment amount."and Invalid card number
    processPayment(-10,"invalidCardNumber","05/22");//Should an throw an error:"Invalid expiration date"
}
catch(error)
{
    console.error(error.message);
}