require('dotenv').config();

const glob = require('glob');
const path = require('path');
const fs = require('fs');
const Twitter = require('twitter');

// const fetch = require('node-fetch');
// const cheerio = require('cheerio');

let tweet = '';

// const fetchTweetFromWebsite = async () => {
//   const lastEpisode = 11;
//   const url = `https://learningcurve.dev/${Math.floor(Math.random() * lastEpisode)}`;
//   console.log('fetching -', url);
//   const res = await fetch(url);
//   const html = await res.text();
//   const $ = cheerio.load(html);
//   const quotes = $('blockquote')
//     .map((i, el) => cheerio.load(el).text())
//     .get();
//   if (quotes.length) {
//     tweet = quotes[Math.floor(Math.random() * quotes.length)];
//   }
// };

(async () => {
  const episodePages = glob.sync('*.md', { cwd: path.join(__dirname, '../episodes') });
  while (!tweet) {
    const randomEpisode = fs.readFileSync(
      path.join(
        __dirname,
        '../episodes',
        episodePages[Math.floor(Math.random() * episodePages.length)]
      ),
      { encoding: 'utf-8' }
    );
    const quotes = randomEpisode
      .split('\n')
      .filter((line) => line.match(/^>/))
      .map((line) => line.replace(/^>\s*/, ''));
    tweet = quotes[Math.floor(Math.random() * quotes.length)];
  }

  console.log(tweet);

  const client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  client.post('statuses/update', { status: tweet }, function (error, tweet, response) {
    if (!error) {
      console.log(tweet);
    } else {
      console.error(error);
    }
  });
})();
