import { Coordinate, Direction, GestureEventType } from '@/types/types';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import Food from './Food';
import Header from './Header';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Snake from './Snake';
import { checkEatsFood } from '@/utils/checkEatsFood';
import { checkGameOver } from '@/utils/checkGameOver';
import { randomFoodPosition } from '@/utils/randomFoodPosition';

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 71 };
const MOVE_INTERVAL = 50; //ms;
const SCORE_INCREMENT = 10;

const Game = () => {
	const [direction, setDirection] = useState<Direction>(Direction.Right);
	const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
	const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);

	useEffect(() => {
		if (!isGameOver) {
			const intervalId = setInterval(() => {
				!isPaused && moveSnake();
			}, MOVE_INTERVAL);

			return () => clearInterval(intervalId);
		}
	}, [snake, isGameOver, isPaused]);

	const handleGesture = (event: GestureEventType) => {
		const { translationX, translationY } = event.nativeEvent;
		//console.log(event.nativeEvent);

		if (Math.abs(translationX) > Math.abs(translationY)) {
			if (translationX > 0) {
				//Moving Right
				setDirection(Direction.Right);
			} else {
				//Moving left
				setDirection(Direction.Left);
			}
		} else {
			if (translationY > 0) {
				//Down
				setDirection(Direction.Down);
			} else {
				//Up
				setDirection(Direction.Up);
			}
		}
	};

	const moveSnake = () => {
		const snakeHead = snake[0];
		const newHead = { ...snakeHead }; // CREATIG A COPY

		//Game over
		if (checkGameOver(snakeHead, GAME_BOUNDS)) {
			setIsGameOver((prevState) => !prevState);
			return;
		}

		switch (direction) {
			case Direction.Up:
				newHead.y -= 1;
				break;
			case Direction.Down:
				newHead.y += 1;
				break;
			case Direction.Right:
				newHead.x += 1;
				break;
			case Direction.Left:
				newHead.x -= 1;
				break;

			default:
				break;
		}

		//if eats food
		//grow snake

		if (checkEatsFood(newHead, food, 2)) {
			// get a new position for the food
			setFood(randomFoodPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
			setSnake([newHead, ...snake]);
			setScore(score + SCORE_INCREMENT);
		} else {
			setSnake([newHead, ...snake.slice(0, -1)]); //Removes the tail of the snake and adds the new head instead
		}
	};

	const pauseGame = () => {
		setIsPaused(!isPaused);
	};
	const reloadGame = () => {
		setIsPaused(false);
		setSnake(SNAKE_INITIAL_POSITION);
		setFood(FOOD_INITIAL_POSITION);
		setScore(0);
		setDirection(Direction.Right);
		setIsGameOver(false);
	};

	return (
		<PanGestureHandler onGestureEvent={handleGesture}>
			<SafeAreaView style={styles.container}>
				<Header
					isPaused={isPaused}
					pauseGame={pauseGame}
					reloadGame={reloadGame}
				>
					<Text
						style={{
							fontSize: 22,
							fontWeight: 'bold',
							color: Colors.light.primary,
						}}
					>
						{score}
					</Text>
				</Header>
				<View style={styles.boundaries}>
					<Snake snake={snake} />
					<Food x={food.x} y={food.y} />
				</View>
			</SafeAreaView>
		</PanGestureHandler>
	);
};

export default Game;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.primary,
	},
	boundaries: {
		flex: 1,
		borderColor: Colors.light.primary,
		borderWidth: 12,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: Colors.light.background,
	},
});
