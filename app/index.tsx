import 'react-native-gesture-handler';

import Game from '@/components/Game';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

const App = () => (
	<GestureHandlerRootView>
		<Game />
	</GestureHandlerRootView>
);

export default App;
