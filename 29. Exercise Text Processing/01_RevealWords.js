function revealWords(words, templates) {
    let splitWords = words.split(", ");
    let splitTemplates = templates.split(" ");

    for (let word of splitWords) {
        for (let template of splitTemplates) {
            if (template.includes("*") && word.length == template.length) {
                templates = templates.replace(template, word);
            }
        }
    }

    console.log(templates);
}