const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const captains = console;

function start() {
  if (!process.env.NODE_ENV) {
    console.error(
      'ENV variables are missing.',
      'Verify that you have set them directly or in a .env file.'
    );
    process.exit(1);
  } else {
    console.log('Using ENV variables');
    console.log(process.env);
  }

  const app = express();
  const port = process.env.PORT || 8626;
  const www = process.env.WWW || './';
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static(www));
  captains.log(`serving ${www}`);
  app.use('/api', routes);
  app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
  });
  app.listen(port, () => captains.log(`listening on http://localhost:${port}`));
}

module.exports.start = start;
