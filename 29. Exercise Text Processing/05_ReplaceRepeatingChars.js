function replaceRepeatingChars (word) {
    let newWord = "";
    let curChar = "";

    for (let i = 0; i < word.length; i++) {
        if (curChar == word.charAt(i)) {
            continue;
        }
        
        curChar = word.charAt(i);
        newWord += curChar;
    }

    console.log(newWord);
}