import { FC, HTMLProps } from 'react'
import Link, { LinkProps } from 'next/link'
import styles from './style.module.css'

type PropsLink = LinkProps & HTMLProps<HTMLAnchorElement>

const CustomLink: FC<PropsLink> = ({ ...atr }) => {
	return (
		<Link className={styles.link} {...atr} href={`/${atr.href}`}>
			{atr.children}
		</Link>
	)
}

export default CustomLink
