import { serverInit } from 'config';
import { getProduct } from 'controllers/Product/getProducts';
import express from 'express';

const app = express();

export const routes = () => {
    serverInit(app);
    app.use('/product/getProduct', getProduct());
    // app.use("/product/getProduct", getProduct());
}