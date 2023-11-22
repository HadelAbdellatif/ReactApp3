wxport const validationUserData = (user)=>{

    let errors = {};

    if(user.name==""){
        errors.name="user is required"
    }

    return errors;
}