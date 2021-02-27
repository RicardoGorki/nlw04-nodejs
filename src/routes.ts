import { Router } from 'express'

import UserController from './controllers/UserController'
import SurveysController from './controllers/SurveysController'
import SendMailController from './controllers/SendMailController'

const routes = Router()

const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailController()

routes.post('/users', userController.create)


routes.post('/surveys', surveysController.create)
routes.get('/surveys', surveysController.show)


routes.post('/sendMail', sendMailController.execute)

export default routes;
