const mongoose = require('mongoose');
const AccountRouter = require('./backend/router/accntRouter.js');
const App = require('./app.js');

(async () => {
  try {
        // Connect to DB
        await mongoose.connect("mongodb://localhost:27017/meetingDB");
        const connection = mongoose.connection;
        connection.once("open", function() {
        console.log("App database connection established successfully");
        });
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }

    const app = new App(
        [
            new AccountRouter(),
        ],
    );

    app.listen();
})();
