export const checkPasswordSecurity = (password) => {
    
    let result = {
        success: false
    };

    if(password){

        const passwordRegexp = getPasswordRegexp();

        if(passwordRegexp.test(password)){
            result.success = true;

        }else{
            result.message = "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
        }

    }else{
        result.message = "Missing password";
    }

    return result;

}

export const getPasswordRegexp = () => {
    // create a regexp to check if password is strong enough
    // at least 8 characters long
    // at least 1 uppercase letter
    // at least 1 lowercase letter
    // at least 1 number
    // at least 1 special character
    // no white spaces
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    
}

export const getUsernameRegexp = () => {
    // create a regexp to check if username is strong enough
    // at least 3 characters long
    // maximun 20 characters long
    // no spaces
    // only letters, numbers and underscores
    return /^[a-zA-Z0-9_-]{3,20}$/;
}

export const checkUsernameSecurity = (username) => {
        
    let result = {
        success: false
    };

    if(username){

        const usernameRegexp = getUsernameRegexp();

        if(usernameRegexp.test(username)){
            result.success = true;

        }else{
            result.message = "Username must be at least 3 characters long and contain no spaces";
        }

    }else{
        result.message = "Missing username";
    }

    return result;

}

