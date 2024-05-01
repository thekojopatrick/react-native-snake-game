import Game from '@/components/Game';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

//TODO: 1. Increase game speed upon certain score
//TODO: 2. Toast game level as speed game speed increase
//TODO: 3. Design a welcome game intro screen
//TODO: 4. Store HighScore

const App = () => (
	<>
		{/* <Stack.Screen options={{ statusBarHidden: true }} /> */}
		<Game />
		<StatusBar hidden />
	</>
);

export default App;
