import express from "express";
import config from "config";
import connect from "./utils/connect";

const port = config.get<number>("port");

const app = express();

app.listen(port, async () => {
  console.log("App is running");

  await connect();
});
