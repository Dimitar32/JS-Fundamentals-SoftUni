function palindromeIntegers(arr) {
    for (let i of arr) {
        let rev = String(i).split('').reverse().join('');

        if (String(i) === rev) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123, 123,454]);