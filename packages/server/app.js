const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server").default;

const port = 3000;
const app = express();

const data = {
  homes: [
    {
      id: 1,
      name: "Kensington Church Street VII",
      slug: "kensington_church_street_vii",
      location: "Notting Hill, London",
      guests: 6,
      size: 1478,
      Highlights: [
        {
          Title: "A gorgeous and shaded private roof terrace",
          Image: "https://via.placeholder.com/1000x500",
          PlumsReview: "sbfiunskdfhiasncjekbwqkjbclkwblkdnljkwbcbwjklbdl",
          Price: "20,960"
        }
      ]
    },
    {
      id: 2,
      name: "test home",
      slug: "test_home",
      location: "Notting Hill, London",
      guests: 2,
      size: 1478,
      Highlights: [
        {
          Title: "A gorgeous and shaded private roof terrace",
          Image: "https://via.placeholder.com/1000x500",
          PlumsReview: "sbfiunskdfhiasncjekbwqkjbclkwblkdnljkwbcbwjklbdl",
          Price: "20,960"
        }
      ]
    }
  ]
};

app.use("/graphql", jsonGraphqlExpress(data));
app.listen(port);

module.exports = app;
