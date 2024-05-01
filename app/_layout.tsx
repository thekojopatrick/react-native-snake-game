import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';

import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		//SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		Digitalt: require('../assets/fonts/Digitalt.ttf'),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider
				value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}
			>
				<Stack>
					<Stack.Screen name='onboarding' options={{ headerShown: false }} />
					{/* <Stack.Screen name='(app)' options={{ headerShown: false }} /> */}
					<Stack.Screen name='modal' options={{ presentation: 'modal' }} />
				</Stack>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
