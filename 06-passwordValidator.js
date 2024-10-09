function passwordValidator(password){

    function checkValidLength(pass){
        if(pass.length >= 6 && pass.length <= 10) {
            return true
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyAlphanumeric(pass) {
        let pattern = /^[A-Za-z0-9]+$/;

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log ("Password must consist only of letters and digits");
            return false
        }
    }

    function checkMin2Digits(pass){
        let pattern = /[0-9]{2,}/;

        if (pattern.test(pass)) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

    let isValidLength = checkValidLength(password);
    let isAsphanumeric = checkOnlyAlphanumeric(password);
    let hasMin2Digits = checkMin2Digits(password);

    if (isValidLength && isAsphanumeric && hasMin2Digits) {
        console.log("Password is valid")
    }
}
passwordValidator('Pa$s$s')