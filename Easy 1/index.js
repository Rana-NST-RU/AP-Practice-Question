const fs = require("fs");

function writeDataFile() {
    fs.writeFileSync("file.txt", "We will not miss the exam next time", "utf8");
}

writeDataFile();