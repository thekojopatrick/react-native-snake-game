import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming,
} from 'react-native-reanimated';
import {
	Dimensions,
	Image,
	StyleSheet,
	View,
	useWindowDimensions,
} from 'react-native';

import CustomButton from '@/components/CustomButton';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export const logo = require('../assets/images/icon.png');

const DURATION = 1000;
const DELAY = 500;

const Onboarding = () => {
	const animButton = useSharedValue<number>(0);
	const opacity = useSharedValue<number>(0);
	const buttonVal = useSharedValue<number>(0);
	const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

	const loadingTextAnimationStyle = useAnimatedStyle(() => {
		opacity.value = withDelay(1 * DELAY, withTiming(1, { duration: DURATION }));
		return {
			opacity: opacity.value,
		};
	});

	return (
		<View style={styles.container}>
			<View style={{ paddingTop: 40 }}>
				<Image source={logo} style={styles.image} resizeMode='contain' />
			</View>
			<Animated.Text style={[styles.loadingText, loadingTextAnimationStyle]}>
				Loading...
			</Animated.Text>
			<CustomButton
				handlePress={() => {
					router.replace('/(app)');
				}}
				title='Get started'
			/>
			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#6C62E5',
	},
	loadingText: {
		fontSize: 20,
		fontFamily: 'Digitalt',
		fontWeight: 'bold',
		color: '#fff',
	},
	image: {
		width: Dimensions.get('window').width * 0.9,
		height: 350,
		//aspectRatio: 3 / 1,
		backgroundColor: 'transparent',
	},
});

export default Onboarding;
