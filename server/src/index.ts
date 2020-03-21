import * as express from "express";
import { createConnection } from "typeorm";
import { Activities } from "./entity/Activities";
import { Questions } from "./entity/Questions";

const port = 3000;

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);


    // INIT THE DATABASE WITH ENTITIES
    createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "family",
      entities: [Activities, Questions],
      synchronize: true,
      logging: false
    })
      .then(connection => {
        // here you can start to work with your entities
      })
      .catch(error => console.log(error));

    this.express.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  }
}

export default new App().express;
