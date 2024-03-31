import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '@/constants/Colors';
import { Coordinate } from '@/types/types';

interface SnakeProps {
	snake: Coordinate[];
}

const Snake = ({ snake }: SnakeProps) => {
	return (
		<Fragment>
			{snake.map((segment, index: number) => {
				const segmentStyle = {
					left: segment.x * 10,
					top: segment.y * 10,
				};
				return <View key={index} style={[styles.snake, segmentStyle]} />;
			})}
		</Fragment>
	);
};

export default Snake;

const styles = StyleSheet.create({
	snake: {
		width: 15,
		height: 15,
		borderRadius: 7,
		backgroundColor: Colors.light.primary,
		position: 'absolute',
	},
});
