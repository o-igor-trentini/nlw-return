import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express().use(cors()).use(express.json()).use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});
