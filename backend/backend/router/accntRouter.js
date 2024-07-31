const Router = require('express');
const { Accounts } = require('../models/accounts');


class AccountRouter {
  path = '/auth';
  router = Router();

    constructor() {
        console.log("AccountRouter initialized");
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}/login`, this.loggingIn);//authMiddleware, 
    }


  //get the contact with id
  loggingIn = async (req, res, next) => {
    console.log("Login route hit");
    try {
        const { username, password } = req.body;
    
        console.log("Received data: ", { username, password });

        console.log("Logging In!");

        if (!(username && password)) {
            return res.status(400).send("All input is required");
        }

        const result = await this.logIn(username, password);

        if (result.success) {
            console.log("logged IN!");
            return res.status(200).send(result.data);
        }
        else {
            console.log("Failed to log in!");
            return res.status(400).send("Invalid Credentials");
        }
      
    } catch (err) {
        console.log(err);
        return res.status(400).send("Invalid Credentials");
    }
  };

  logIn = async (username, password) => {
    try {
        console.log("Inside the accntRouter");
        console.log("Finding user with username:", username);

        const user = await Accounts.findOne({ username });
        
        if (!user) {
            console.log("User not found");
            return { success: false, msg: "Invalid Credentials" };
        }
    
        console.log("User found:", user);
        const passwordMatch = password === user.password;
        console.log("Password match:", passwordMatch);
    
        if (user && passwordMatch) {       
            // Respond with user information
            return { success: true, data: { username: user.username } };
        } else {
            console.log("Invalid credentials");
            return { success: false, msg: "Invalid Credentials" };
        }
    } catch (e) {
        console.log("Error during log in:", e);
        return { success: false, msg: "Error during login" };
    }
  };


}

module.exports = AccountRouter;
