const expressRoute = require('express')
const clientesModelRoutes = require('../model/Clientes.js')

const router = expressRoute.Router()

router.get('/getCliente', async (req, res) => {
    try{
        const client = clientesModelRoutes.find()
        res.status(200).json(client)
    }catch(err){
        res.status(500).json({error: err})
    }
})
router.post('/insertNewCliente', async(req, res)=>{
    const {nome, CPF, numero} = req.body
    const client = {
        nome,
        CPF,
        numero,
    }
    if(!nome){
        res.status(422)
    }
    try{
        
        await clientesModelRoutes.create(client)
        res.status(201).json({message: 'cliente criado'})
    
    }catch(err){
        res.status(500).json({error: err})
    }
})

module.exports = router;
 