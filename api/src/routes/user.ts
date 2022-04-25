import { Response, Request, Router, NextFunction } from 'express';
import { User } from '../models/User';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
	User.findAll()
		.then((users) => {
			res.send(users);
		})
		.catch((error) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	const user = req.body;
	User.create(user)
		.then((createdUser) => {
			res.send(createdUser);
		})
		.catch((error) => next(error));
});

router.delete('/', async (req: Request, res: Response, next: NextFunction) => {
	const { userId } = req.body;
	const userToDelete = await User.findByPk(userId);
	if (!userToDelete) return res.status(404).send('El usuario no existe');
	else {
		userToDelete
			.destroy()
			.then(() => {
				res.status(202).send('Usuario eliminado correctamente');
			})
			.catch((error) => res.status(404).send('No se pude eliminar'));
	}
});

export default router;
