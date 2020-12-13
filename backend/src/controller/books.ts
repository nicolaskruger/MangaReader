import {Router,Response,Request} from 'express';
import book from '../model/bookQ';

const routes = Router();

routes.get("/book",(req,res)=>{
    book.select()
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(200).json(err);
        })
})
routes.get("/bookImg/:id",(req,res)=>{
    book.selectImg(parseInt(req.params.id))
        .then(s=>{
            res.status(200).send(s);
        })
        .catch(err=>{
            res.status(400).send(err);
        })
})
export default routes;