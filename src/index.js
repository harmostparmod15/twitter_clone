const express = require("express");
const connect = require("./config/database");
const app = express();

const { TweetRepository } = require("./repository/index");
const TweetService = require("./services/tweet-service");

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");

  let service = new TweetService();
  const tweet = await service.create({
    content: "is #tweets working ?",
  });
  console.log(tweet);
});
