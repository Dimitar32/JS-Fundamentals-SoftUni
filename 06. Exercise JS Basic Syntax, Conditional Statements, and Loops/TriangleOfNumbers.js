function triangleOfNumber(num) {
    for (let i = 1; i <= num; i++) {
        let print = "";
        for (let j = 0; j < i; j++) {
            print += (i + " ");
        }
        console.log(print);
    }
}

triangleOfNumber(3);