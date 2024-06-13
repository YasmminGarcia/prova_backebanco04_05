
 import express from 'express'
    import sql from 'mssql'
    import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()


//ROTA DE GET! 

routes.get('/', async (req, res)=>{
   try{
        const { recordset } =  await pool.query`select * from agendamento`
        return res.status(200).json(recordset)
   }
   catch(error){
        return res.status(501).json('Deu erro meu caro proletariado!')
   }
})

//ROTA DE POST

routes.post('/agendamento/novo', async (req, res)=>{
    try{
        const { data, hora, motivo} = req.body;
        await pool.query`insert into agendamento values(${data},${hora},${motivo})`
        return res.status(201).json(`ok`)
    }
    catch(error){
        return res.status(501).json('Deu erro no seu agendamento, realize-o novamente!')
    }
})

//ROTA DE DELETE!

    routes.delete('/agendamento/excluir/:id', async (req, res)=>{
    try {
        const { id } = req.params
        await pool.query`delete from agendamento where id = ${id}`
        return res.status(200).json('Foi excluido o seu agendamento...')
    } catch (error) {
        console.log(error)
        return res.status(501).json('Caro proletariado, deu erro ao excluir o seu agendamento')
    }
})

export default routes