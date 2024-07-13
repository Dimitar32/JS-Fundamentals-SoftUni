function passwordValidator(pass) {
    let len = pass.length;
    let passLenValid = true;
    let onlyDigitsLetters = true;
    let numDigValid = false;
    let numDig = 0;

    if(len < 6 || len > 10) {
        passLenValid = false;
    }

    for (let i = 0; i < len; i++) {
        if (pass[i] >= '0' && pass[i] <= '9') {
            numDig++;
        }

        if ((pass[i] >= '0' && pass[i] <= '9') || (pass[i] >= 'a' && pass[i] <= 'z') || (pass[i] >= 'A' && pass[i] <= 'Z')) {
            continue;
        }
        
        onlyDigitsLetters = false;
    }

    if (numDig >= 2) {
        numDigValid = true;
    }

    if (numDigValid && onlyDigitsLetters && passLenValid) {
        console.log("Password is valid");
    } else {
        if (!passLenValid) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!onlyDigitsLetters) {
            console.log("Password must consist only of letters and digits");
        }
        if (!numDigValid) {
            console.log("Password must have at least 2 digits");
        }
    }
}