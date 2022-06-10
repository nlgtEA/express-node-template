import express from 'express';

import config from 'src/config';
import authRouter from 'src/routes/auth';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.use('/auth', authRouter);

app.listen(config.port, () =>
  console.log(`Server is listening on port ${config.port}`)
);
