const dotenv = require('dotenv');
if (dotenv.error) {
  console.error(
    'ENV variables are missing.',
    'Verify that you have set them directly or in a .env file.'
  );
  process.exit(1);
}

const express = require('express');
const app = express();
const port = process.env.PORT || port;
const publicweb = process.env.PUBLICWEB || './dist';
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

