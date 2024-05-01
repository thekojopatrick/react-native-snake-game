import {
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Stack, router } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import React from 'react';

const logo = require('../../assets/images/icon.png');

const PlayerMenu = () => {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<SafeAreaView style={styles.container}>
				<View style={{ paddingTop: 40 }}>
					<Image source={logo} style={styles.image} resizeMode='contain' />
				</View>
				<View style={styles.menuContainer}>
					<CustomButton
						handlePress={() => {
							router.push('/select-player');
						}}
						title='New Player'
						position='relative'
					/>
					<CustomButton
						handlePress={() => {
							router.replace('/(app)/select-player');
						}}
						title='Select Player'
						position='relative'
					/>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#6C62E5',
	},
	image: {
		width: Dimensions.get('window').width * 0.9,
		height: 350,
		//aspectRatio: 3 / 1,
		marginTop: 60,
		backgroundColor: 'transparent',
	},
	menuContainer: {
		//flex: 1,
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
	},
});

export default PlayerMenu;
