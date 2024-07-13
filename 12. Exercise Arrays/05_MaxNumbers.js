function maxNumber(arr) {
    let result = "";
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let flag = true;
        for (let j = i + 1; j < len; j++) {
            if (arr[i] <= arr[j]) {
                flag = false;
            }
        }
        if (flag) {
            result += arr[i] + " ";
        }
    }

    console.log(result);
}


