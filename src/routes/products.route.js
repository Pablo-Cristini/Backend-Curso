import { Router } from 'express';

const routerProducts = Router();

const products = [
    {
    title: "nombre",
    price: "precio",
    id: 1,
},
]

routerProducts.get("/",(req, res) => {
    const response = {
        status: "ok",
        data: products,
    }
    res.json(response)

});
routerProducts.post("/", (req, res) => {
    const {title, price} = req.body
    const newProduct = {
        title,
        price,
        id: products.length + 1,
    }
    products.push(newProduct)
    console.log(newProduct)
    console.log(products)
    res.status(201).json(newProduct)
});
routerProducts.put("/:id", (req, res) => {
    const { id } = req.params;
    const { title, price} = req.body;
    const  newIdProduct = products.some((e) => e.id === Number(id));
    let result;
    let status;
    if (newIdProduct) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    result = {
        title,
        price,
        id: Number(id),
    };
    products.splice(index, 1, result);
    status = 200;
    } else {
    result = { error: "producto no encontrado" };
    status = 404;
    }
    res.status(status).json(result);
});
routerProducts.delete("/:id", (req, res) => {
    const { id } = req.params;
    const newIdProduct = products.some((e) => e.id === Number(id));
    let result;
    let status;
    if (newIdProduct) {
    result = products.find((e) => e.id == Number(id));
    const index = products.indexOf(result);
    products.splice(index, 1);
    result = products;
    status = 200;
    } else {
    result = { error: "producto no encontrado" };
    status = 404;
    }
    res.status(status).json(result);
});



export default routerProducts;
