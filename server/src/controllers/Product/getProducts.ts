import express from "express";
import { knex } from "database/knex";

const ApiError = require('../../api-error');
const router = express.Router();

export const getProduct = () => {
    return router.get(
      "/",
      
      async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const products = await knex('product_detail')
            .join('product', 'product.id_product', '=', 'product_detail.id_product')
            .join('color_product', 'color_product.color', '=', 'product_detail.color')
            .join('size_product', 'size_product.size', '=', 'product_detail.size')
            .select('*');
            res.send(products);
        } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'Teddy bears not found'));
    }
}
)
};