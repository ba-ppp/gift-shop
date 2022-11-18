import express from "express";
import { knex } from "database/knex";
import { idText } from "typescript";
import { v4 } from "uuid";

const ApiError = require('../../api-error');
const router = express.Router();

export const addBill = () => {
    return router.post(
        "/",

        async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const { listProduct, name, phone, totalPrice, typeShip } = req.body;
                const uid = v4();
                const results = await knex('bill')
                    .insert([{ id_bill: uid, name_cus: name, phone_cus: phone, total_price: totalPrice, ship: typeShip }])
                listProduct.forEach(async (item: {quantity: any; idDetail: any; item: any;}) => {
                    const results = await knex('bill_detail')
                        .insert([{ id_bill: uid, id_detail : item.idDetail, quantity : item.quantity}])
                });
                res.send({
                    statusCode: 200,
                    massage: "Success",
                  });
            } catch (error) {
                console.log(error);
                return next(
                    new ApiError(500, 'False'));
            }
        }
    )
};