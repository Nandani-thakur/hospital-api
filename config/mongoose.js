
const mongoose = require('mongoose');

const uri = 'mongodb+srv://nandanith7563:amrQ2kxvptQsaLl9@cluster0.ksefrdm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri)//it establishes a connection to the MongoDB server and returns a promise. If connection is successful, promise
 //will resolve.If there is an error during the connection process, the promise will be rejected.
     .catch((err) => console.log("connection " + err));

const db = mongoose.connection;//mongoose.connection object serves as the interface through which you can interact with the MongoDB database connection,
// perform operations, and handle events related to the connection.

db.on('error', console.error.bind(console, "Error connecting to MongoDB Atlas"));


db.once('open', function () {
     console.log(' Connected to Database ');
});
