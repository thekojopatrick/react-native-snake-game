import 'react-native-gesture-handler';

import Game from '@/components/Game';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

//TODO: 1. Increase game speed upon certain score
//TODO: 2. Toast game level as speed game speed increase
//TODO: 3. Design a welcome game intro screen
//TODO: 4. Store HighScore

const App = () => (
	<GestureHandlerRootView>
		<Game />
	</GestureHandlerRootView>
);

export default App;
