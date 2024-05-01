import { storage } from '../storage';
import { useMMKVBoolean } from 'react-native-mmkv';
import { useState } from 'react';

const IS_FIRST_TIME = 'IS_FIRST_TIME';

export const useIsFirstTime = () => {
	const [isFirstTime, setIsFirstTime] = useMMKVBoolean(IS_FIRST_TIME, storage);

	//const [isFirstTime, setIsFirstTime] = useState();
	if (isFirstTime === undefined) {
		return [true, setIsFirstTime] as const;
	}
	return [isFirstTime, setIsFirstTime] as const;
};
