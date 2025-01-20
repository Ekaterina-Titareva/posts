'use client'

import { useEffect } from 'react'

import useAction from '@/src/hoc/useAction'
import { usePosts } from '@/src/hoc/usePosts'
import { IPost } from '@/src/store/posts/posts.interface'

import Loading from './loading'
import Error from '../error'
import Post from '@/src/components/post/Post'

import styles from './style.module.css'

const Posts = () => {
	const { fetchPosts } = useAction()
	// const { fetchPosts, deletePost } = useAction();

	const { posts, isLoading, errorMessage } = usePosts()

	useEffect(() => {
		if (!posts.length) {
			try {
				fetchPosts()
			} catch (error) {
				console.error('Ошибка при загрузке статей:', error)
			}
		}
	}, [fetchPosts, posts])

	// const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
	//   const target = event.target as HTMLElement;
	//   const closestPost = target.closest(".post");

	//   if (closestPost) {
	//     const id = closestPost.getAttribute("data-id");
	//     console.log(`выбираем статью: ${id}`);

	//     // deletePost(Number(id));
	//   }
	// };

	if (isLoading) return <Loading />
	if (errorMessage) return <Error />
	console.log(posts)
	return (
		<section
			// onClick={handleClick}
			className={styles.posts}
		>
			{posts.map((post: IPost) => (
				<Post key={post.id} post={post} />
			))}
		</section>
	)
}

export default Posts
