export const validationUserData = (user)=>{

    let errors = {};

    if(user.name.trim()==""){
        errors.name="username is required"
    }
    else if(user.name.trim().length <3){
        errors.name="username must be at least 3 characters";
    }

    
    if(user.email.trim()==""){
        errors.name="email is required"
    }
    else if(user.email.trim().length <9){
        errors.name="email must be at least 9 characters";
    }
    
    
    if(user.pass.trim()==""){
        errors.name="user is required"
    }
    else if(user.name.trim().length <3){
        errors.name="username must be at least 3 characters";
    }
    

    return errors;
}