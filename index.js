const express = require('express');
const app = express();
const routes = require('./routes');

let port = process.env.PORT || 4000;

app.use('/api/v1', routes);
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})
app.use((request, response, next) => {
  if (request.path === "/") {
    response.status(200).send({ message: "ok" });
  } else {
    next();
  }
});
