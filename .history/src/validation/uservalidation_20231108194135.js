export const validationUserData = (user)=>{

    let errors = {};

    if(user.name.trim()==""){
        errors.name="user is required"
    }
    else if(user.name.trim().length <3){
        errors.name="username must be at least 3 characters";
    }

    
    if(user.email.trim()==""){
        errors.name="user is required"
    }
    else if(user.email.trim().length <9){
        errors.name="username must be at least 3 characters";
    }
    
    

    return errors;
}