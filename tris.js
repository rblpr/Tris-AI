const express = require("express");
const Datastore = require("nedb");
const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
app.use(express.static("tris"));
app.use(express.json());

const scoresdb = new Datastore("trisdb.db");
scoresdb.loadDatabase();

app.get("/api", (request, response) => {
  console.log("Accesso in corso");
  scoresdb.find({}, (error, data) => {
    if (error) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post("/api", (request, response) => {
  console.log("Inserimento dati");
  const data = request.body;
  data.timestamp = Date.now();
  scoresdb.insert(data);

  console.log(data);

  response.json(data);
});
