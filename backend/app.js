const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class App {
  constructor(routers) {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.initializeMiddlewares();
    this.initializeRouters(routers);
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  initializeRouters(routers) {
    routers.forEach((router) => {
      this.app.use('/', router.router);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

module.exports = App;
