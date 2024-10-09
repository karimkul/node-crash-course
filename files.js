const fs = require("fs");

// reading files

// fs.readFile("./docs/blog1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// console.log("last line");

// writing files

// fs.writeFile("./docs/blog1.txt", "hello world", "utf-8", () => {
//     console.log("file was written");
// });
// fs.writeFile("./docs/blog2.txt", "hello again", "utf-8", () => {
//     console.log("file was written");
// });

// directories

// if there is no assets folder then it will create a assets folder if there is then it will delete assets folder
// if (!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created");
//     });
// } else {
//     fs.rmdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    });
}
