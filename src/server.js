import express, {json, urlencoded}  from 'express';
import routerProducts from './routes/products.route.js'
import baseRouter from './routes/base.route.js'
import {fileURLToPath} from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __direname = dirname(__filename)
const app = express()

app.use(json());
app.use(urlencoded({extended: true}));

app.use('/api/products', routerProducts)
app.use('/', baseRouter)
app.listen(8080, (error) =>{
    if(error){
        console.log("ocurrio un error en el puerto")
    }else{
    console.log("servidor escuchando puerto 8080")
}
})

//59.26