'use client'

import { useState } from 'react'
import Login from '@/src/components/login/Login'
import Registration from '@/src/components/registration/Registration'
import styles from './style.module.css'

const Auth = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	return (
		<section className={styles.auth}>
			<button
				className={styles.button}
				type='button'
				{...{
					onClick: () => {
						setType(type === 'login' ? 'register' : 'login')
					}
				}}
			>
				{type === 'login' ? 'Регистрация' : 'Вход'}
			</button>
			{type === 'login' ? <Login /> : <Registration />}
		</section>
	)
}

export default Auth
