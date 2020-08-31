export const userNameValidator = value => {
    if (!value) {
        return 'Cannot be empty';
    }
    else if (value.length < 8) {
        return 'should be minimum of 8 characters';
    }
    else if (!value.match('/^[A-Za-z0-9_]*$/')){
        return 'can only contain alphanumeric characters and _';
    }
    
    return false;
}

export const passwordValidator = value => {
    if (!value) {
        return 'Cannot be empty';
    }
    if (value.length < 8) {
        return('should be a minimum of 8 charactesrs');
    } else if (value.search(/\d/) === -1) {
        return('must contain a number');
    } else if (value.search(/[A-Z]/) === -1) {
        return('must contain upper case letter');
    } else if (value.search(/[^!@#$%^&*()_+]/) !== -1) {
        return('must contain atleast one of the following !@#$%^&*(_+');
    }
    return false;
}