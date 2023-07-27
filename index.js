const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/character", (req, res) => {
  res.json([
    {
      id: 2594029,
      url: "https://www.tvmaze.com/episodes/2594029/the-simpsons-35x01-tba",
      name: "TBA",
      season: 35,
      number: 1,
      type: "regular",
      airdate: "2023-10-01",
      airtime: "20:00",
      airstamp: "2023-10-02T00:00:00+00:00",
      runtime: 30,
      rating: {
        average: null,
      },
      image: null,
      summary: null,
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/2594029",
        },
        show: {
          href: "https://api.tvmaze.com/shows/83",
        },
      },
    },
  ]);
});

app.listen(3000, () => console.log("API Server is running..."));
