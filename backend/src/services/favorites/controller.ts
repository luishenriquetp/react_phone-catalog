import express, { Request } from 'express';
import FavoriteService from './services';
import StandardResponse from '../../utils/StandardResponse';
import authMiddleware from '../../middlewares/authentication';

const favoritesRouter = express.Router();
const favoriteService = new FavoriteService();

favoritesRouter.post(
	'/addFavorite',
	authMiddleware,
	async (req: Request & { userId?: string }, res, next) => {
		const { productId } = req.body;
		console.log(req.userId);
		try {
			const favorite = await favoriteService.addFavorite(
				req.userId!,
				productId
			);

			StandardResponse.responseWrapper({
				message: 'Favorite Added Successfully',
				res,
				data: favorite,
				statusCode: 200,
			});
		} catch (error) {
			next(error);
		}
	}
);

favoritesRouter.get(
	'/getFavorites',
	authMiddleware,
	async (req: Request & { userId?: string }, res) => {
		try {
			const favorites = await favoriteService.getFavorites(req.userId!);

			StandardResponse.responseWrapper({
				message: 'Favorites Retrieved Successfully',
				res,
				data: favorites,
				statusCode: 200,
			});
		} catch (error) {
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
);

export default favoritesRouter;
