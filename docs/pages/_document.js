import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/core';

class Document extends NextDocument {
	static getInitialProps(ctx) {
		return NextDocument.getInitialProps(ctx);
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta title='Workpay Design System' />
					<link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
					<meta name='theme-color' content='#319795' />
				</Head>
				<body>
					<ColorModeScript initialColorMode='light' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
