function magicSum(arr, sum) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (i != j && (arr[i] + arr[j]) == sum) {
                console.log(arr[i] + " " + arr[j]);
            }
        }
    }
}

magicSum([1,2,3,4,5,6,7], 8);