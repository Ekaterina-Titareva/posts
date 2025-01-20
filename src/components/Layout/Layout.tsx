import { FC, PropsWithChildren } from 'react'

import LayoutHeader from './layout-header/LayoutHeader'
import LayoutFooter from './layout-footer/LayoutFooter'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<LayoutHeader />
			<main>{children}</main>
			<LayoutFooter />
		</>
	)
}

export default Layout
