import {Router,Response,Request} from 'express';
import chapter from '../model/chapterQ';

const routes = Router();

routes.get("/chapter",(req,res)=>{
    chapter.select()
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})
routes.get("/chapter/:id",(req,res)=>{
    chapter.selectByBook(parseInt(req.params.id))
        .then(s=>{
            res.status(200).json(s);
        })
        .catch(err=>{
            res.status(400).json(err);
        })
})

export default routes;