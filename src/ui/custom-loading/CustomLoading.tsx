'use client'
import { FC } from 'react'
import styles from './styles.module.css'

const CustomLoading: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.hourglass} />
		</div>
	)
}

export default CustomLoading
