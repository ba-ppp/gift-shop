import { serverInit } from 'config';
import express from 'express';

const app = express();

export const routes = () => {
    serverInit(app);

    // app.use("/products", getProduct());
}