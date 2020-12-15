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
routes.get("/book/:id",(req,res)=>{
    book.selectById(parseInt(req.params.id))
        .then((s:any)=>{
            res.status(200).json(s[0])
        })
        .catch(err=>{
            res.status(400).json(err)
        })
})
routes.get("/bookName/:name",(req,res)=>{
    book.selectByName(req.params.name)
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})
export default routes;