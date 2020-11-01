import { Box } from '@chakra-ui/core';
import React from 'react';

export default function Container(props) {
	return (
		<Box
			width='full'
			position='relative'
			maxWidth='1280px'
			mx='auto'
			px={6}
			{...props}
		/>
	);
}
