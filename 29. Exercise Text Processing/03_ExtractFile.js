function extractFile(filePath) {
    let splitFilePath = filePath.split("\\");
    let splitFileName = splitFilePath[splitFilePath.length - 1].split(".");

    console.log("File name: " + splitFileName[0]);
    console.log("File extension: " + splitFileName[1]);
}