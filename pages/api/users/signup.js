
import UserController from '../../../controllers/UserController';
import route from '../../../middleware';


route.post(async (req, res) => { new UserController(req, res).signup()})


export default route;