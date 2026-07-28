const fs = require('fs');
// FS Module(Used for File Handling)
// Mode: Write, Read, Append

// Sync
fs.writeFileSync("./demo.txt", "Sameer Shaikh");

// Async
fs.writeFile("./log.txt", "Jaynesh Sarkar 12:30", (err) => {
    if (err) {
        console.log(err);
    }

});

// Sync
fs.appendFileSync("./demo.txt", "Hello Node Js");

fs.appendFile("demo.txt", "Maulik Makvana 1:30 PM", (error) => {
    if (error) {

        console.log(error);

    } else {


    }
});

//Append
//Sync
fs.appendFileSync("./rnw.txt", new Date().toLocaleString() + "\n");

//Async
fs.appendFile("./userLog.txt", new Date().toLocaleString() + "\n", (err) => { })


// Read

// Sync
const result = fs.readFileSync("./rnw.txt", "utf-8");
console.log(result);

// Async
fs.readFile("userLog.txt", "utf-8", (err, output) => {

    if (err) {
        console.log(err);

    } else {
        console.log(output);

    }
})


// Delete
fs.unlink("./demo.txt", () => { })

fs.unlinkSync("./demo.txt")
