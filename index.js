require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const dns = require("dns");

// Basic Configuration
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Corrected to express.urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
let usedShortUrls = {}; // Changed from an array to an object

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.post("/api/shorturl", async (req, res) => {
  let originalUrl = req.body.url;
  try {
    const { address } = await dns.promises.lookup(
      new URL(originalUrl).hostname
    );
    // If the DNS lookup is successful, proceed with generating the short URL
    let shortUrl;

    // Ensure the generated short URL is unique
    do {
      shortUrl = generateRandom4Digit();
    } while (usedShortUrls[shortUrl]);

    usedShortUrls[shortUrl] = originalUrl;
    // Save the originalUrl and shortUrl in your database or data structure

    res.json({ original_url: originalUrl, short_url: shortUrl });
  } catch (error) {
    // If DNS lookup fails, consider the URL invalid
    res.json({ error: "invalid url" });
  }
});

app.get("/api/shorturl/:short_url", (req, res) => {
  let shortUrl = req.params.short_url;
  // Retrieve the original URL from your database using the shortUrl
  let url = usedShortUrls[shortUrl];
  if (url) {
    // Redirect the user to the original URL
    res.redirect(url);
  } else {
    // If the short URL is not found, handle it accordingly
    res.json({ error: "short url not found" });
  }
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

function generateRandom4Digit() {
  return Math.floor(1000 + Math.random() * 9000);
}
