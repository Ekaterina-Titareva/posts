/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { FieldErrors, useFormContext } from 'react-hook-form'
import styles from './style.module.css'

interface InputProps {
	label: string
	name: string
	type: 'text' | 'number' | 'email'
}

const Input: FC<InputProps> = ({ label, name, type }) => {
	const {
		register,
		trigger,
		setValue,
		formState: { errors }
	} = useFormContext()

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await trigger(name)
		setValue(name, event.target.value)
	}
	const typedErrors = errors as FieldErrors<Record<string, any>>
	return (
		<>
			<label className='' htmlFor={name}>
				{label}
			</label>
			<input
				className={styles.input}
				id={name}
				type={type}
				{...register(name)}
				onChange={e => handleChange(e)}
			/>
			{typeof typedErrors[name]?.message === 'string' && (
				<p className={styles.error}>{typedErrors[name].message}</p>
			)}
		</>
	)
}

export default Input
