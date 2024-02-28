try{
    login("user123","password123")
    login("","password456")//should throw an error:username is required
    login("user456","")//should throw an error:password is required
    login("onvalidUser","invalidPassword");
}
catch(error)
{
    console.error(error.message);
}