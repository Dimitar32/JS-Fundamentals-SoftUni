function mergeArrays(arr1, arr2) {
    let resultArr = [];
    let len = arr1.length;

    for (let i = 0; i < len; i++) {
        let print = "";
        if (i % 2 == 0) {
            resultArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            resultArr[i] = arr1[i] + arr2[i];
        }
    }

    console.log(resultArr.join(' - '));
}