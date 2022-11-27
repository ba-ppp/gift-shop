import express from "express";
import { knex } from "database/knex";
import { idText } from "typescript";

const ApiError = require('../../api-error');
const router = express.Router();

export const getBillByPhone = () => {
    return router.get(
        "/",

        async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const phone = req.query.phone;
                let product = {
                    id_product: "",
                    name: "",
                    size: "",
                    price: "",
                    image: "",
                    date: "",
                    quantity: "",
                };
                let listOders = {
                    nameCus: "",
                    phone: "",
                    listOder: [] as any,
                };
                const results = await knex('bill_detail')
                    .join('bill', 'bill.id_bill', '=', 'bill_detail.id_bill')
                    .join('product_detail', 'bill_detail.id_detail', '=', 'product_detail.id_detail')
                    .join('product', 'product.id_product', '=', 'product_detail.id_product')
                    .select('*')
                    .where('phone_cus', '=', phone);
               
                
                results.forEach((item: any) => {
                    listOders.nameCus = item.name_cus;
                    listOders.phone = item.phone_cus;
                    product.id_product = item.id_product
                    product.name = item.name_product;
                    product.image = item.image
                    product.size = item.size;
                    product.price = item.price;
                    product.quantity = item.quantity;
                    product.date = item.date_buy.toLocaleString(); 
                    listOders.listOder.push({...product});
                });
                
                res.send(listOders);
            

            } catch (error) {
                console.log(error);
                // return next(
                //     new ApiError(500, 'Phone not found'));
            }
        }
    )
};