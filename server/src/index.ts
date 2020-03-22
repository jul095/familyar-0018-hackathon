import * as express from "express";
import { createConnection, getConnection } from "typeorm";
import { Activities } from "./entity/Activities";
import { Questions } from "./entity/Questions";

import { ActivityService } from "./services/ActivityService";
import { QuestionsService } from "./services/QuestionsService";
import * as bodyParser from "body-parser";
import { FamilyService } from "./services/FamilyService";
import { FamilyMember } from "./entity/FamilyMember";
import { Family } from "./entity/Family";



import {
  rawSQLActivities,
  rawSQLQuestions,
  rawDeleteActivities,
  rawDeleteQuestions
} from "./seed";

const newSeed = true;
const port = 3000;
const host = "localhost";

const corsAddress = "*"

class App {
  public express: express.Application;

  private activityService: ActivityService;
  private questionService: QuestionsService;
  private familyService: FamilyService;

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

    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    // INIT THE DATABASE WITH ENTITIES
    createConnection({
      type: "postgres",
      host: host,
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "family",
      entities: [Activities, Questions, Family, FamilyMember],
      synchronize: true,
      logging: false
    })
      .then(connection => {
        // SERVICE LOCATOR
        this.activityService = new ActivityService();
        this.questionService = new QuestionsService();
        this.familyService = new FamilyService();

        if (newSeed) {
          // SEED DATABASE SECTION
          // What is seperation of concerns, hafi would be proud
          //

          connection
            .query(rawDeleteActivities)
            .then(() => connection.query(rawSQLActivities));
          connection
            .query(rawDeleteQuestions)
            .then(() => connection.query(rawSQLQuestions));
        }

        // END SEED SECTION
      })
      .catch(error => console.log(error));

    //
    //  REST Endpoints
    //

    this.express.get("/activites", (req, res) => {
      res.header('Access-Control-Allow-Origin', corsAddress);
      this.activityService.findActivities().then(data => res.send(data));
    });

    this.express.get("/randomquestion", (req, res) => {
      res.header('Access-Control-Allow-Origin', corsAddress);
      this.questionService.findRandomQuestion().then(data =>  res.send(data));
    });


    this.express.get("/suitablequestion", (req, res) => {
      res.header('Access-Control-Allow-Origin', corsAddress);
      this.questionService.findSuitableQuestion(req.body.age).then(data =>  res.send(data));
    });

    const urlencodedParser = bodyParser.urlencoded({
      extended: false
    });

    this.express.post("/family/new", urlencodedParser, (req, res) => {
      res.header('Access-Control-Allow-Origin', corsAddress);
      console.log(req.body);
      this.familyService.newFamily(req.body).then(data => res.send(data));
    });

    this.express.post("/member/new", urlencodedParser, (req, res) => {
      res.header('Access-Control-Allow-Origin', corsAddress);
      this.familyService
        .addNewFamilyMember(req.body)
        .then(data => res.send(data));
    });

    this.express.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  }
}

export default new App().express;
