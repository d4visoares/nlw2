import {Response, Request, response} from 'express';
import db from '../database/connection';

export default class ConnectionController{
   async index(req: Request, res: Response){
      const totalCount = await db('connections').count('* as total');

      const { total } = totalCount[0];

      return res.json({ total });
   }

   async create(req: Request, res: Response){
      const { user_id } = req.body;

      await db('connections').insert({
         user_id
      })

      res.status(201).send();
   }
}