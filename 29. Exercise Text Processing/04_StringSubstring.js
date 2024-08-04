function stringSubstring(word, sentence) {
    let lowerWord = word.toLowerCase();
    let lowerSentence = sentence.toLowerCase();

    if (lowerSentence.includes(lowerWord)) {
        console.log(word);
    } else {
        console.log(word + " not found!");
    }
}