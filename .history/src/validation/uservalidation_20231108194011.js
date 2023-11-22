export const validationUserData = (user)=>{

    let errors = {};

    if(user.name.trim()==""){
        errors.name="user is required"
    }
    

    return errors;
}