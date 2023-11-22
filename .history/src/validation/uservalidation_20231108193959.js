wxport const validationUserData = (user)=>{

    let errors = {};

    if(user.name.t==""){
        errors.name="user is required"
    }

    return errors;
}