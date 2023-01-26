const routes = require('express').Router();
const facialModelRoutes = require('../model/Facial');

routes.post('/postFacial', async (req, res) => {
    const {
        ClientId,
        CutaneousBiotype,
        CutaneousStatus,
        Texture,
        Ostios,
        Acne,
        FitzPatrickSkinPhototype,
    } = req.body;
    const facial = {
        ClientId,
        CutaneousBiotype,
        CutaneousStatus,
        Texture,
        Ostios,
        Acne,
        FitzPatrickSkinPhototype,
    }
    try{
        const newfacial = await facialModelRoutes.create(facial);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ newfacial, message: "Exame facial cadastrado com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
});
routes.get('/getFacial', async (req, res) => {
    try{
        const facial = await facialModelRoutes.find();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ facial, message: "Lista de exames faciais carregada com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
})

routes.delete('/deleteFacial', async (req, res) => {
    const id = req.body._id;
    try{
        await facialModelRoutes.deleteOne({ _id: id });
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json({ message: "Exame facial deletado com sucesso!" });
    }
    catch(err){
        res.status(500).json({ error: err });
    }
})
module.exports = routes;