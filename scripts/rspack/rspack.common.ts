import * as path from 'node:path';
import { rspack } from '@rspack/core';
import { ReactRefreshRspackPlugin } from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { mfConfig } from '../moduleFederation/moduleFederationConfig';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export const getCommonConfig = (params?: {
	isDev?: boolean;
	isRefreshPluginSupressed?: boolean;
}) => {
	const isDev = params?.isDev ?? process.env.NODE_ENV === 'development';

	return {
		entry: {
			main: './src/index.ts',
		},
		resolve: {
			extensions: ['...', '.ts', '.tsx', '.jsx'],
		},
		output: {
			uniqueName: 'CoreUIComponents',
			path: path.resolve(__dirname, '../../dist/app'),
		},
		experiments: {
			css: true,
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif|jp2|webp)$/,
					type: 'asset',
				},
				{
					test: /\.(jsx?|tsx?)$/,
					use: [
						{
							loader: 'builtin:swc-loader',
							options: {
								jsc: {
									parser: {
										syntax: 'typescript',
										tsx: true,
									},
									transform: {
										react: {
											runtime: 'automatic',
											development: isDev,
											refresh: isDev,
										},
									},
								},
								env: { targets },
							},
						},
					],
				},
			],
		},
		plugins: [
			new rspack.HtmlRspackPlugin({
				template: './public/index.html',
			}),
			new ModuleFederationPlugin(mfConfig),
			isDev ? new ReactRefreshRspackPlugin() : null,
		].filter(Boolean),
	};
};
