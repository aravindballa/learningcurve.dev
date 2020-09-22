const glob = require('glob');
const path = require('path');
const fs = require('fs');

const EPISODES_PATH = path.join(__dirname, '../episodes');

(async () => {
  const episodePages = glob.sync('*.md', { cwd: EPISODES_PATH });
  for (const episodePage of episodePages) {
    let episodeContent = fs.readFileSync(path.join(EPISODES_PATH, episodePage), {
      encoding: 'utf-8',
    });
    episodeContent = episodeContent.replace(/\n(.*?)\s([0-9]+:[0-9]+)\s*/g, (_, name, time) => {
      return `\n<TranscriptSpeaker name="${name}" time="${time}" />\n\n`;
    });
    // episodeContent = episodeContent.replace(/\n(.*?): \[([0-9]+:[0-9]+)\]\s*/g, (_, name, time) => {
    //   return `\n<TranscriptSpeaker name="${name}" time="${time}" />\n\n`;
    // });
    fs.writeFileSync(path.join(EPISODES_PATH, episodePage), episodeContent, { encoding: 'utf-8' });
  }
})();
