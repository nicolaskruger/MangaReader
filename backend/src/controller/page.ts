import {Router,Response,Request} from 'express';
import page from '../model/pageQ';

const routes = Router();

routes.get("/page",(req,res)=>{
    page.select()
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(200).json(err);
        })
})
routes.get("/page/:id",(req,res)=>{
    page.selectByChapter(parseInt(req.params.id))
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})
routes.get("/pagePath/:id",(req,res)=>{
    page.selectPath(parseInt(req.params.id))
        .then((s:any)=>{
            res.status(200).json(s[0])
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})
routes.get("/pageImg/:id",(req,res)=>{
    page.selectImg(parseInt(req.params.id))
        .then((s)=>{
            res.status(200).send(s);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})

export default routes;