const expressRoute = require('express')
const clientesModelRoutes = require('../model/Clientes.js')

const router = expressRoute.Router()

//rota de get
router.get('/getCliente', async (req, res) => {
    try{
        const client = await clientesModelRoutes.find()
        res.status(200).json(client)
    }catch(err){
        res.status(500).json({error: err})
    }
})
router.get('/getClienteByName', async(req, res) => {
    
    const name = req.body.Name
    try{
        const client = await clientesModelRoutes.findOne({Name: name})
        res.json(client)
    }
    catch(err){
        res.status(500).json({error:err})
    }
})
//entrada de dados
router.post('/insertNewCliente', async(req, res)=>{
    const { Address, Age, Birthdate, Cellphone, Cep, City, District, Mail, Name, Profession, State} = req.body
    const client = {
        Address, 
        Age, 
        Birthdate, 
        Cellphone, 
        Cep, 
        City, 
        District, 
        Mail, 
        Name, 
        Profession, 
        State
    }
    if(!Name){
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
 