const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server").default;

const port = 3000;
const app = express();

const data = {
  homes: [
    {
      id: 1,
      name: "Kensington Church Street VII",
      guests: 6,
      size: 1478,
      Highlights: [
        {
          Title: "A gorgeous and shaded private roof terrace",
          Image: "https://via.placeholder.com/{w}x{h}/​"
        }
      ]
    },
    {
      id: 2,
      name: "test home",
      guests: 2,
      size: 1478,
      Highlights: [
        {
          Title: "A gorgeous and shaded private roof terrace",
          Image: "https://via.placeholder.com/{w}x{h}/​"
        }
      ]
    }
  ]
};

app.use("/graphql", jsonGraphqlExpress(data));
app.listen(port);

module.exports = app;
