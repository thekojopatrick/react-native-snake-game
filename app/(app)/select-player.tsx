import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Stack, router } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import React from 'react';

const logo = require('../../assets/images/icon.png');

const SelectPlayer = () => {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<View style={styles.container}>
				<View style={{ paddingTop: 0 }}>
					<Image source={logo} style={styles.image} resizeMode='contain' />
				</View>
				<View style={styles.menuContainer}>
					<CustomButton
						handlePress={() => {
							router.push('/play');
						}}
						title='Chris'
						position='relative'
					/>
					<CustomButton
						handlePress={() => {
							router.replace('/play');
						}}
						title='Patrick'
						position='relative'
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 60,
		backgroundColor: '#6C62E5',
	},
	image: {
		width: Dimensions.get('window').width * 0.9,
		height: 300,
		//aspectRatio: 3 / 1,
		backgroundColor: 'transparent',
	},
	menuContainer: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
		marginBottom: 70,
	},
});

export default SelectPlayer;
