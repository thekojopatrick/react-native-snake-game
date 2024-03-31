import { Coordinate } from '@/types/types';
export const checkGameOver = (
	snakeHead: Coordinate,
	boundaries: any
): boolean => {
	return (
		snakeHead.x < boundaries.xMin ||
		snakeHead.x < boundaries.XMax ||
		snakeHead.y > boundaries.Ymax ||
		snakeHead.y < boundaries.yMin
	);
};
