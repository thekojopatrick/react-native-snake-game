import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import React from 'react';
import { SharedValue } from 'react-native-reanimated';

type Props = {
	handlePress: () => void;
	buttonVal?: SharedValue<number>;
	title: string;
};
const btnImage = require('../assets/images/button-bg.png');

const CustomButton = ({ handlePress, buttonVal, title }: Props) => {
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<ImageBackground source={btnImage} style={[styles.buttonImage]}>
					<View style={styles.buttonStyle}>
						<Text style={styles.buttonText}>{title}</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 100,
		zIndex: 1,
		width: 120,
		height: 60,
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingText: {
		fontSize: 20,
		fontFamily: 'Digitalt',
		fontWeight: 'bold',
		color: '#fff',
	},
	image: {
		width: 350,
		height: 350,
		backgroundColor: 'transparent',
	},
	buttonImage: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		aspectRatio: 3 / 1,
		//width: Dimensions.get('window').width * 0.5,
		//borderWidth: 1,
	},
	buttonStyle: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
		// marginTop: 30,
		//backgroundColor: '#F78A3B',
		// shadowColor: '#D85604',
		// shadowOffset: {
		// 	width: -5,
		// 	height: 5,
		// },
		// shadowOpacity: 1,
		// elevation: 10,
		//borderWidth: 1,
		//width: Dimensions.get('window').width * 0.8,
	},
	buttonText: {
		//borderWidth: 1,
		fontSize: 30,
		fontFamily: 'Digitalt',
		fontWeight: '700',
		color: '#FFFFFF',
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: 4,
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
