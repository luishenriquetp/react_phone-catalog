import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';

const prisma = new PrismaClient();

class FavoriteService {
	async addFavorite(productId: string, userId: string) {
		try {
			if (!userId) {
				throw new AppError('You need to be logged in to add favorites', 401);
			}

			const user = await prisma.user.findUnique({ where: { id: userId } });
			console.log(user);
			const favorite = await prisma.favorite.create({
				data: {
					userId,
					productId,
				},
			});

			return favorite;
		} catch (error) {
			console.log(error);
			throw new AppError('Favorite Not Added', 500);
		}
	}

	async getFavorites(userId: string) {
		try {
			if (!userId) {
				throw new AppError('You need to be logged in to view favorites', 401);
			}

			const favorites = await prisma.favorite.findMany({
				where: { userId },
			});

			return favorites;
		} catch (error) {
			throw new AppError('Favorites Not Found', 404);
		}
	}
}

export default FavoriteService;
