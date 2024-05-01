import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key: string, value: any) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		// saving error
		console.log('Error storing value: ', e);
	}
};

export const getItem = async (key: string, value: any) => {
	try {
		await AsyncStorage.getItem(key, value);
	} catch (e) {
		// saving error
		console.log('Error retrieving value: ', e);
	}
};

export const removeItem = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		// saving error
		console.log('Error deleting value: ', e);
	}
};
