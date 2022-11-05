import express from "express";
import { knex } from "database/knex";
import { idText } from "typescript";

const ApiError = require('../../api-error');
const router = express.Router();

export const getProductByCat = () => {
    return router.get(
      "/",
      
      async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const cat = req.query.cat;
            let data = {
                id_product: "",
                name: "",
                id: [] as any,
                size: [] as any,
                price: [] as any,
                describes: "",
                status: "",
                color: "",
                image: ""
            }
            let products = [] as any;

            const results = await knex('product_detail')
            .join('product', 'product.id_product', '=', 'product_detail.id_product')
            .select('*')
            .where('id_cat','=',cat);

            let currentProduct = results[0].id_product;
            
            results.forEach((item: any) =>{
                    if(item.id_product === currentProduct){
                        data.id_product = item.id_product
                        data.name = item.name_product;
                        data.describes = item.describes;
                        data.status = item.stt;
                        data.color = item.color;
                        data.image = item.image
                        data.id.push(item.id_detail);
                        data.size.push(item.size);
                        data.price.push(item.price);  
                    }else {
                        products.push(data);
                        currentProduct = item.id_product;
                        const newData = {
                            id_product : item.id_product,
                            name : item.name_product,
                            describes : item.describes,
                            status : item.stt,
                            color : item.color,
                            image : item.image,
                            id : [item.id_detail],
                            size : [item.size],
                            price: [item.price],
                        };
                        data = {...newData}
                    }
                    console.log(products)
                });
            products.push(data);
            res.send(products);
                
        } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, 'Teddy bears not found'));
    }
}
)
};