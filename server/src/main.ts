import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/api', (request: Request, response: Response) => {
  response.send({ message: request.hostname });
});

app.listen(8080, () => 'Listening on port 8080.');
