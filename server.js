const server = require('./server/index');

server.start();

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3001;
// const publicweb = process.env.PUBLICWEB || './publicweb';
// app.use(express.static(publicweb));
// console.log(`serving ${publicweb}`);
// app.get('*', (req, res) => {
//   res.sendFile(`index.html`, { root: publicweb });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
