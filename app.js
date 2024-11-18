import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  console.log("Hi, there!");
  res.sendFile("./public/index.html", { root: __dirname });
});
app.get("/express", (req, res) => {
  res.send(
    "Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült."
  );
});
app.get("/greeting", (req, res) => {
  const name = "Czakó Máté";
  res.send("Hello,  " + name);
});
app.get("/nodejs", (req, res) => {
  res.send(
    "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül."
  );
});
//4.feladat
const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];
app.get("/api/users", (req, res) => {
  let ki = "";
  for (let user in users) {
    ki += "<p> id: " + users[user].id + ", name: " + users[user].name + "</p>";
  }
  if (users.length > 0) {
    res.status(200).send(ki);
  } else {
    res.status(400).send("Bad request users data not found!");
  }
});
for (let user in users) {
  const route = "/api/users/:" + user.id;
  app.get(route, (req, res) => {
    res.send(
      "<p> id: " + users[user].id + ", name: " + users[user].name + "</p>"
    );
  });
}
for (let user in users) {
  const route = "/api/users/:" + user.id;
  app.post(route, (req, res, err) => {
    req.accepts("json");
    if (err) {
      res.status(401);
    } else {
      res.status(201);
    }
  });
}
for (let user in users) {
  const route = "/api/users/:" + user.id;
  app.put(route, (req, res, err) => {
    req.accepts("json");
    if (err) {
      res.status(400);
    } else {
      res.status(200);
    }
  });
}
for (let user in users) {
  const route = "/api/users/:" + user.id;
  app.delete(route, (req, res) => {
    req.accepts("json");
    if (err) {
      res.status(400);
    } else {
      res.status(204);
    }
  });
}
app.use((req, res) => {
  res.status(404).send("404-es hiba az oldal nem található!");
});
app.listen(PORT, () => {
  console.log("A server listens on localhost:" + PORT);
});
