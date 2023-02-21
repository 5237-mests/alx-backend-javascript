import express from 'express';
import mapRoutes from './routes';

const PORT = 1245;
const HOST = 'localhost';
const app = express();

mapRoutes(app);

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

export default app;
module.exports = app;
