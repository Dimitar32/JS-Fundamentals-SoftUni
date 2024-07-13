function commonElements(arr1, arr2) {
    for (let i of arr1) {
        if (arr2.includes(i)) {
            console.log(i);
        }
    }
}