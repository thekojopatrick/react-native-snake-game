import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
	reloadGame: () => void;
	pauseGame: () => void;
	children: JSX.Element;
	isPaused: boolean;
}

export default function Header({
	children,
	reloadGame,
	pauseGame,
	isPaused,
}: HeaderProps): JSX.Element {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={reloadGame}>
				<Ionicons name='reload-circle' size={35} color={Colors.light.primary} />
			</TouchableOpacity>

			<TouchableOpacity onPress={pauseGame}>
				<FontAwesome
					name={isPaused ? 'play-circle' : 'pause-circle'}
					size={35}
					color={Colors.light.primary}
				/>
			</TouchableOpacity>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.05,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: Colors.light.primary,
		borderWidth: 12,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomWidth: 0,
		padding: 15,
		backgroundColor: Colors.light.background,
	},
});
