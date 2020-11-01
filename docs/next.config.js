/* eslint-disable global-require */
const withPlugins = require('next-compose-plugins');
const remarkPlugins = [
	require('remark-autolink-headings'),
	require('remark-emoji'),
	require('remark-images'),
	require('remark-slug'),
	require('remark-unwrap-images'),
];

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins,
	},
});

module.exports = withPlugins(
	[
		withMDX({
			pageExtensions: ['js', 'jsx', 'md', 'mdx'],
		}),
	],
	{
		async redirects() {
			return [
				{
					source: '/',
					destination: '/getting-started',
					permanent: true,
				},
			];
		},
	},
);
