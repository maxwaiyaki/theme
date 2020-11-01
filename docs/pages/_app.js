/* eslint-disable react/prop-types */
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { theme } from '../../packages/wp-theme/src';
import DocsHeader from '../components/DocsHeader';
import MDXComponents from '../components/MDXComponents';
import SideNav from '../components/SideNav';
import Container from '../components/Container';

// 2. declare your configuration, these are the defaults
const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
};

console.log(theme);

// 3. extend the theme
const customTheme = extendTheme({ config });

const Main = (props) => <Box as='main' mx='auto' mb='3rem' {...props} />;

const DocsLayout = ({ children }) => (
	<Container position='relative'>
		<DocsHeader />
		<SideNav display={['none', null, 'block']} maxWidth='18rem' width='full' />
		<Box pl={[0, null, '18rem']} mt='4rem'>
			<Main maxWidth='46rem' pt={8} px={5}>
				{children}
			</Main>
		</Box>
	</Container>
);

export default function App({ Component, pageProps }) {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<MDXProvider components={MDXComponents}>
				<DocsLayout>
					<Component {...pageProps} />
				</DocsLayout>
			</MDXProvider>
		</ChakraProvider>
	);
}
