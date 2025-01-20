'use client'

import { SubmitHandler } from 'react-hook-form'

import useAction from '@/src/hoc/useAction'
import { useAuth } from '@/src/hoc/useAuth'
import { loginSchema } from '@/src/constants/yupSchema'
import { SubmitLoginProps } from '@/src/store/user/user.interface'

import Form from '@/src/ui/form/Form'
import Input from '@/src/ui/input/Input'
import Title from '@/src/ui/title/Title'
import Loading from '@/app/auth/loading'
import Error from '@/app/error'

import styles from './style.module.css'

const Registration = () => {
	const { registrationUser } = useAction()
	const { user, isLoading, errorMessage } = useAuth()

	const onSubmit: SubmitHandler<SubmitLoginProps> = data => {
		registrationUser(data)
	}

	if (isLoading) return <Loading />

	return (
		<section className={styles.registration}>
			{user ? user.email : ''}
			<Title title='Регистрация' />
			<Form onHandleSubmit={onSubmit} schema={loginSchema}>
				<Input label='Почта' name='email' type='email' />
				<Input label='Пароль' name='password' type='number' />
			</Form>
			{errorMessage && <Error />}
		</section>
	)
}

export default Registration
