import express from "express";
import chalk from "chalk";
import morgan from "morgan";

let app = express();

let port = process.env.PORT || 5000;

app.use(morgan("tiny"));

app.get("/blah", (req, res) => {
  res.json({
    success: true,
    hello: "hi",
  });
});

app.listen(port, () =>
  console.log(
    chalk.yellow("Express listening on port ") + chalk.yellow.bold(port)
  )
);
