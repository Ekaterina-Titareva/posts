/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './style.module.css'

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
	onHandleSubmit: (data: any) => void
	schema: yup.AnyObjectSchema | undefined
}

const Form: FC<PropsWithChildren<FormProps>> = ({
	onHandleSubmit,
	schema,
	children,
	...FormHTMLAttributes
}) => {
	const methods = useForm({
		resolver: schema ? yupResolver(schema) : undefined
	})

	const { handleSubmit } = methods

	return (
		<FormProvider {...methods}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(data => {
					return onHandleSubmit(data)
				})}
				{...FormHTMLAttributes}
			>
				{children}
				<input className={styles.submit} type='submit' />
				<DevTool control={methods.control} />
			</form>
		</FormProvider>
	)
}

export default Form
