'use client'

import Link from 'next/link'

export default function NotFoundComponent() {
	return (
		<div className=''>
			<Link href='/' className=''>
				Return Home
			</Link>
		</div>
	)
}
