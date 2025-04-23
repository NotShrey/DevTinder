
const validateSignUpdata = (req) => {
    const {firstName, lastName, emailId, passWord} = req.body;

    if(!firstName || !lastName){
        throw new Error("name not found");
    }
    else if(!validator.isStrongPassword(passWord)){
        throw new Error("enter strong passWord")
    }

}