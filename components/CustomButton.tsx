import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import { SharedValue } from 'react-native-reanimated';

type Props = {
	handlePress: () => void;
	buttonVal?: SharedValue<number>;
	title: string;
	position?: 'relative' | 'absolute';
};
const btnImage = require('../assets/images/button-bg.png');

const CustomButton = ({
	handlePress,
	buttonVal,
	title,
	position = 'absolute',
}: Props) => {
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={{ ...styles.container, position: position }}>
				<View style={styles.buttonStyle}>
					<Text style={styles.buttonText}>{title}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};
// const CustomButton = ({
// 	handlePress,
// 	buttonVal,
// 	title,
// 	position = 'absolute',
// }: Props) => {
// 	return (
// 		<TouchableWithoutFeedback onPress={handlePress}>
// 			<View style={{ ...styles.container, position: position }}>
// 				<ImageBackground
// 					source={btnImage}
// 					style={[styles.buttonImage]}
// 					resizeMode='contain'
// 				>
// 					<View style={styles.buttonStyle}>
// 						<Text style={styles.buttonText}>{title}</Text>
// 					</View>
// 				</ImageBackground>
// 			</View>
// 		</TouchableWithoutFeedback>
// 	);
// };

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 100,
		zIndex: 1,
		width: Dimensions.get('window').width * 0.8,
		height: (Dimensions.get('window').height * 0.2) / 2.5,
		borderRadius: 12,
		backgroundColor: '#F78A3B',
		alignItems: 'center',
		//justifyContent: 'center',
		//borderWidth: 5,
		//borderColor: '#fff',
		shadowColor: 'white',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 1, // By default, shadowOpacity is 1 in React Native
		shadowRadius: 0,
		elevation: 1,
	},
	buttonImage: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		//aspectRatio: 3 / 1,
		//width: '100%',
		width: Dimensions.get('window').width * 0.9,
		height: 60,
		//borderWidth: 1,
	},
	buttonStyle: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		backgroundColor: '#F78A3B',
		shadowColor: '#D85604',
		shadowOffset: {
			width: -5,
			height: 5,
		},
		shadowOpacity: 0.9,
		shadowRadius: -5,
		elevation: -3,
		width: '100%',
		//borderWidth: 6,
		//borderColor: '#fff',
	},
	buttonText: {
		fontSize: 30,
		fontFamily: 'Digitalt',
		fontWeight: '700',
		color: '#FFFFFF',
		textAlign: 'center',
		textTransform: 'uppercase',

		shadowColor: 'rgba(0, 0, 0, 0.24)',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 1, // By default, shadowOpacity is 1 in React Native
		shadowRadius: 8,
		elevation: 10,
	},
});

export default CustomButton;
