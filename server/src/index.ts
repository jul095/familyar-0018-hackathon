import * as express from "express";
import { createConnection } from "typeorm";
import { Activities } from "./entity/Activities";
import { Questions } from "./entity/Questions";

import { ActivityService } from "./services/ActivityService";

const port = 3000;

class App {
  public express: express.Application;

  private activityService: ActivityService;

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
        this.activityService = new ActivityService();
      })
      .catch(error => console.log(error));



      this.express.get('/activites', (req,res) => {
        
        this.activityService.findActivities().then((data) => res.send(data))
        
      })

    this.express.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  }
}

export default new App().express;
