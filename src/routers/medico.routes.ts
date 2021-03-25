import { Router } from 'express'
const routers: Router = Router()


routers.post('/getAll', () => { console.log('oi') })
routers.post('/basicPay', () => { console.log('oi') })

module.exports = routers