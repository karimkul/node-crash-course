const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog3.txt", {
    encoding: "utf-8"
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");
// readStream.on("data", (chunk) => {
//     console.log("_________new chunk_________");
//     console.log(chunk);
//     writeStream.write("\nNew Chunk\n");
//     writeStream.write(chunk);
// });
readStream.pipe(writeStream);
