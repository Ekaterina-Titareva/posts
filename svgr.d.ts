declare module '*.svg?element' {
	import { FC, SVGProps } from 'react'
	const content: FC<SVGProps<SVGElement>>
	export default content
}

declare module '*.svg' {
	const content: string
	export default content
}
