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
          PlumsReview:
            "The canyons and slopes of the Hollywood Hills, which run from Hollywood west to the canyons above Beverly Hills, are best seen from the winding concourse of Mulholland Drive, threading the crest of the mountains. With its striking panorama after dark of the illuminated city-grid stretching nearly to the horizon, the road is a prime axis for the LA good life, with mansions so commonplace that only the half-dozen fully blown castles really stand out. For a more up-close look at landmark architecture, take in a concert at the Hollywood Bowl, the massive concrete bandshell whose summer music offerings tend toward the crowd-pleasing variety. Throughout Hollywood you can see the Hollywood Sign, erected as a property advertisement in 1923 (it actually spelled “Hollywoodland” until 1949) and illuminated with four thousand light bulbs. Nowadays, infrared cameras and radar-activated zoom lenses have been installed to catch graffiti writers.The best views can be had from the Griffith Observatory.",
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
