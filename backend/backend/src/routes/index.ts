import { Router, Application } from 'express';
import { IndexController } from '../controllers';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Application) {
    app.use('/api/items', router);
    router.get('/', indexController.getItems.bind(indexController));
    router.post('/', indexController.createItem.bind(indexController));
}