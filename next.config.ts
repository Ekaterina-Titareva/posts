import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg')
		)

		// Push new rules for handling SVG imports
		config.module.rules.push(
			// Rule for SVG imports with ?element
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: /element/, // Match *.svg?element
				use: ['@svgr/webpack'] // Use SVGR to convert to React component
			},
			// Rule for all other SVG imports
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: { not: /element/ } // Exclude if *.svg?element
			}
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	}
}

export default nextConfig
