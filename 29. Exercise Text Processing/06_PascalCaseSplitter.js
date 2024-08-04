function pascalCaseSplitter(str) {
    let curText = "";
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 && i > 0) {
            arr.push(curText);
            curText = str.charAt(i);
            continue;
        }
        curText += str.charAt(i);
    }
    arr.push(curText);

    console.log(arr.join(", "));
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");