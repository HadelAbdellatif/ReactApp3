export const validationUserData = (user)=>{

    let errors = {};

    if(user.name.trim()==""){
        errors.name="user is required"
    }
    else if(user.name.trim().length)

    return errors;
}