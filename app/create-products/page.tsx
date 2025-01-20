'use client'

import useAction from '@/src/hoc/useAction'
import { usePosts } from '@/src/hoc/usePosts'
import { postSchema } from '@/src/constants/yupSchema'
import { SubmitPostProps } from '@/src/store/posts/posts.interface'

import Form from '@/src/ui/form/Form'
import Input from '@/src/ui/input/Input'
import Loading from './loading'
import Error from '../error'

import styles from './style.module.css'

const CreateProduct = () => {
	const { addPost } = useAction()
	const { isLoading, errorMessage } = usePosts()

	const handleSubmit = (data: SubmitPostProps) => {
		addPost(data)
	}

	if (isLoading) return <Loading />
	if (errorMessage) return <Error />
	return (
		<section className={styles.createProduct}>
			<h2>Добавить статью</h2>
			<Form onHandleSubmit={handleSubmit} schema={postSchema}>
				<Input label='id' name='id' type='number' />
				<Input label='Заголовок' name='title' type='text' />
				<Input label='Описание' name='body' type='text' />
			</Form>
		</section>
	)
}

export default CreateProduct
