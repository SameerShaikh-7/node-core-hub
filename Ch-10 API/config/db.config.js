const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB is connected successfully...");
}).catch((err) => {
    console.log("DB Connection Error: ", err);
});
