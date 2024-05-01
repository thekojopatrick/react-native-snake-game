import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Stack, router } from 'expo-router';

import CustomButton from '@/components/CustomButton';
import Game from '@/components/Game';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

//TODO: 1. Increase game speed upon certain score
//TODO: 2. Toast game level as speed game speed increase
//TODO: 3. Design a welcome game intro screen
//TODO: 4. Store HighScore

const logo = require('../../assets/images/icon.png');

const App = () => (
	<>
		<Stack.Screen options={{ headerShown: false }} />
		<View style={styles.container}>
			<View style={{ paddingTop: 40 }}>
				<Image source={logo} style={styles.image} resizeMode='contain' />
			</View>
			<View style={styles.menuContainer}>
				<CustomButton
					handlePress={() => {
						router.push('/play');
					}}
					title='Play'
					position='relative'
				/>
				<CustomButton
					handlePress={() => {}}
					title='High Score'
					position='relative'
				/>
				<CustomButton
					handlePress={() => {}}
					title='Score'
					position='relative'
				/>
				<CustomButton
					handlePress={() => {}}
					title='Help?'
					position='relative'
				/>
			</View>
		</View>
	</>
);

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
		backgroundColor: 'transparent',
	},
	menuContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
	},
});

export default App;
