function modernTimesOfHashTag(sentence) {
    let splitSentence = sentence.split(" ");

    for (let s of splitSentence) {
        let lowerS = s.toLowerCase();
        let flag = true;

        if (s.charAt(0) == "#" && s.length > 1) {
            for (let i = 1; i < lowerS.length; i++) {
                if (lowerS.charAt(i) < 97 || lowerS.charAt(i) > 122) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                console.log(s.slice(1));
            }
        }
    }
}