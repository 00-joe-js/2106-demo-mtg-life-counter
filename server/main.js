const PORT = 8080;
const server = require('./index');

const init = () => {
  try {
    server.listen(PORT, () => console.log(`Listening on port ${PORT} :)`));
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
}

init();
