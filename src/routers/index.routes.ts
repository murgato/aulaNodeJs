import { Router } from 'express';
const medicoRoutes = require('./medico.routes')


const routers: Router = Router();


routers.use('/MuriloCouto-GabrielGiolo', medicoRoutes)




module.exports = routers