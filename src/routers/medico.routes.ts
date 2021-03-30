import { Router } from 'express'
import * as ControllerMedico from '../controllers/medico.controller'
const routers: Router = Router()


routers.get('/getAll', ControllerMedico.getMedicos)
routers.put('/create', ControllerMedico.addMedico)
routers.get('/getOne/:id', ControllerMedico.getMedico)
routers.post('/update/:id', ControllerMedico.updateMedico)
routers.delete('/delete/:id', ControllerMedico.delMedico)

module.exports = routers