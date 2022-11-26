import { serverInit } from 'config';
import { addBill } from 'controllers/Bill/addBill';
import { getBillByPhone } from 'controllers/Bill/getBillByPhone';
import { getProduct } from 'controllers/Product/getProducts';
import { getProductByCat } from 'controllers/Product/getProductsByCat';
import express from 'express';

const app = express();

export const routes = () => {
    serverInit(app);
    app.use('/product/getProduct', getProduct());
    app.use('/bill/addBill', addBill());
    app.use('/product/getProductByCat', getProductByCat());
    // app.use("/product/getProduct", getProduct());
    app.use('/bill/getBillByPhone', getBillByPhone());
}