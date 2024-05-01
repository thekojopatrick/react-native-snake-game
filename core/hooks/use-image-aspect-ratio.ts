import { Image, ImageSourcePropType } from 'react-native';
import { useEffect, useState } from 'react';

export function useImageAspectRatio(imageUrl: any) {
	const [aspectRatio, setAspectRatio] = useState(1);

	useEffect(() => {
		if (!imageUrl) {
			return;
		}

		let isValid = true;
		Image.getSize(imageUrl, (width, height) => {
			if (isValid) {
				setAspectRatio(width / height);
			}
		});

		return () => {
			isValid = false;
		};
	}, [imageUrl]);

	return aspectRatio;
}
