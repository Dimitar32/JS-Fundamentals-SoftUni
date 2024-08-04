function cutAndReverse(str) {
    let res1 = "";
    let res2 = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (i >= str.length / 2) {
            res1 += str.charAt(i);
        } else {
            res2 += str.charAt(i);
        }
    }

    console.log(res1);
    console.log(res2);
}