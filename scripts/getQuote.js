const fetch = require('node-fetch');
const cheerio = require('cheerio');

let tweet = '';
const lastEpisode = 11;

(async () => {
  while (!tweet) {
    const url = `https://learningcurve.dev/${Math.floor(Math.random() * lastEpisode)}`;
    console.log('fetching -', url);
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const quotes = $('blockquote')
      .map((i, el) => cheerio.load(el).text())
      .get();
    if (quotes.length) {
      tweet = quotes[Math.floor(Math.random() * quotes.length)];
    }
  }

  console.log(tweet);
})();
