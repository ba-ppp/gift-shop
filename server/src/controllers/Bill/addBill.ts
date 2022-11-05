import express from "express";
import { knex } from "database/knex";
import { idText } from "typescript";

const ApiError = require('../../api-error');
const router = express.Router();

export const addBill = () => {
    return router.post(
      "/",
      
      async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { id, name, phone, totalPrice } = req.body;
            const results = await knex('bill')
            .insert([{id_detail : id, name_cus : name, phone_cus : phone, total_price : totalPrice}])
            res.send(results);
            console.log(results);
        } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'False'));
    }
}
)
};